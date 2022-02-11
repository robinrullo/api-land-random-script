import { getRandomScript } from '../services/script.service'
import { text } from 'itty-router-extras'

const RandomScript = async (): Promise<Response> => {
  const body: string = (await getRandomScript()).content
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Cache-control': 'no-cache',
    'Content-type': 'application/javascript',
  }
  return text(body, { headers })
}

export default RandomScript
