import { Script, scriptFilter } from '../types'
import { randomEntry } from '../utils'
import { StatusError } from 'itty-router-extras'

const getNextScriptId = (scripts: Script[]): number => {
  if (!scripts.length) return 1
  return Math.max(...scripts.map((script: Script): number => script.id)) + 1
}

export const getAll = async (
  filter: scriptFilter = 'all',
): Promise<Script[]> => {
  const scripts: Script[] | null = await KV_SCRIPTS.get('scripts', {
    type: 'json',
  })
  if (!scripts) throw new StatusError(500, 'Cannot get scripts')

  switch (filter) {
    case 'activated':
      return scripts.filter((script: Script) => script.isActivated)
    case 'disabled':
      return scripts.filter((script: Script) => !script.isActivated)
    case 'all':
      return scripts
  }
}

export const getById = async (id: number): Promise<Script> => {
  const scripts = await getAll()

  const script = scripts.find((script) => script.id === id)
  if (!script) throw new StatusError(404, 'Script Not Found')

  return script
}

export const getRandomScript = async (): Promise<Script> => {
  const scripts: Script[] = await getAll('activated')

  return randomEntry<Script>(scripts)
}

export const update = async (
  id: number,
  newScript: Script,
): Promise<Script> => {
  if (!newScript) throw new StatusError(400, 'invalid script provided')

  const scripts: Script[] = await getAll()

  const idx: number = scripts.findIndex((script: Script) => script.id === id)
  if (idx < 0) throw new StatusError(404, 'Script not found')
  newScript.id = id
  scripts[idx] = newScript
  console.log(idx, scripts[idx])

  await KV_SCRIPTS.put('scripts', JSON.stringify(scripts))

  return newScript
}

export const add = async (script: Script): Promise<Script> => {
  if (!script) throw new StatusError(400, 'invalid script provided')

  const scripts: Script[] = await getAll()
  script.id = getNextScriptId(scripts)

  const newScripts: Script[] = [...scripts, script]
  await KV_SCRIPTS.put('scripts', JSON.stringify(newScripts))

  return script
}

export const addMany = async (scripts: Script[] | null): Promise<Script[]> => {
  if (!scripts?.length) throw new StatusError(400, 'missing scripts')

  const persistedScripts: Script[] = await getAll()

  let nextId = getNextScriptId(persistedScripts)

  scripts.forEach((script: Script) => {
    script.id = nextId
    nextId++
  })

  const newScripts = [...persistedScripts, ...scripts]
  await KV_SCRIPTS.put('scripts', JSON.stringify(newScripts))

  return scripts
}

export const deleteOne = async (id: number): Promise<Script> => {
  const script = await getById(id)
  const scripts = (await getAll()).filter((script: Script) => script.id !== id)
  await KV_SCRIPTS.put('scripts', JSON.stringify(scripts))
  return script
}

export const deleteMany = async (
  scriptFilter: scriptFilter = 'all',
): Promise<Script[]> => {
  let newScripts: Script[] = []
  console.log(scriptFilter)
  switch (scriptFilter) {
    case 'all':
      break
    case 'activated':
      newScripts = await getAll('disabled')
      break
    case 'disabled':
      newScripts = await getAll('activated')
      break
    default:
      throw new StatusError(
        400,
        'Bad filter. Filter must be one of "all", "activated", or "disabled"',
      )
  }

  await KV_SCRIPTS.put('scripts', JSON.stringify(newScripts))
  return await getAll()
}
