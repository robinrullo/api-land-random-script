import { getById, getRandomScript } from '../services/script.service'
import { text } from 'itty-router-extras'
import { Script } from '../types'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Cache-control': 'no-cache',
  'Content-type': 'application/javascript',
}

const RandomScript = async (): Promise<Response> => {
  const script: Script = await getRandomScript()

  return text(script.content, { headers })
}

const ScriptById = async ({ id }: { id: string }): Promise<Response> => {
  const script: Script = await getById(+id)

  return text(script.content, { headers })
}

export default {
  RandomScript,
  ScriptById,
}
