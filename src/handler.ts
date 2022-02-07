import { getRandomScript, Script } from './script'

export async function handleRequest(request: Request): Promise<Response> {
  const script: Script = await getRandomScript()
  const response = new Response(script.content)
  response.headers.set('Content-Type', 'application/javascript')

  return response
}
