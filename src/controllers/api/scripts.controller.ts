import { json } from 'itty-router-extras'
import { getAll } from '../../services/script.service'
import { Script } from '../../types'

const Scripts = async (): Promise<Response> => {
  const body: Script[] = await getAll()
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  }
  return json(body, { headers })
}

export default Scripts
