import { json } from 'itty-router-extras'
import {
  add,
  addMany,
  deleteMany,
  deleteOne,
  getById,
  update,
} from '../../services/script.service'
import { Script, scriptFilter } from '../../types'

type IdParam = {
  id: string
}
type RequestParam<T extends string, U> = {
  [key in T]: U
}
type RequestBody<T> = {
  content: T
}

const getScriptById = async ({ id }: IdParam): Promise<Response> => {
  const script = await getById(+id)
  return json(script)
}

const updateScript = async ({
  id,
  content,
}: IdParam & RequestBody<Script>): Promise<Response> => {
  const script: Script = await update(+id, content)
  return json(script)
}

const createScript = async ({
  content,
}: RequestBody<Script>): Promise<Response> => {
  const script: Script = await add(content)
  return json(script, { status: 201, statusText: 'Created' })
}

const deleteScript = async ({ id }: IdParam): Promise<Response> => {
  const script: Script = await deleteOne(+id)
  return json(script)
}

const createManyScripts = async ({
  content,
}: RequestBody<Script[]>): Promise<Response> => {
  const scripts: Script[] = await addMany(content)
  return json(scripts, { status: 201, statusText: 'Created' })
}

const deleteManyScripts = async ({
  filter,
}: RequestParam<'filter', scriptFilter>): Promise<Response> => {
  const scripts: Script[] = await deleteMany(filter)
  return json(scripts)
}

export default {
  getScriptById,
  updateScript,
  createScript,
  createManyScripts,
  deleteScript,
  deleteManyScripts,
}
