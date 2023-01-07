import { ApiResponseStatus } from '../types'
import { API_ENDPOINT, API_RESET_ENDPOINT, XSS_INJECTION } from '../APIEntries.constants'
import { getAll } from './apis.service'

const makeInjection = async (path: string, content: string): Promise<Response> => {
  console.log('makeInjection', path, content)
  return await fetch(path, {
    method: 'POST',
    body: content,
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
}

export const injectAllApi = async (): Promise<ApiResponseStatus[]> => {
  const fetchResponses: ApiResponseStatus[] = []
  const apiResource = await getAll()
  for (const apiCollection of apiResource) {
    for (const api of apiCollection.children) {
      const endpoint = `${API_ENDPOINT}/${apiCollection.path}/${api.path}`
      const content = JSON.stringify(api.content).replace(/{{\s*injection\s*}}/gmi, XSS_INJECTION)
      const res = await makeInjection(endpoint, content)
      fetchResponses.push({
        apiEndpoint: endpoint,
        statusCode: res.status,
        statusText: res.statusText,
      })
    }
  }

  return fetchResponses
}

export const resetAllApi = async (): Promise<ApiResponseStatus[]> => {
  const responses: ApiResponseStatus[] = []
  const apiResource = await getAll()

  const resetEndpoints = apiResource.map((api) => `${API_RESET_ENDPOINT}/${api.path}`)
  for (const resetEndpoint of resetEndpoints) {
    const res = await fetch(resetEndpoint)
    responses.push({
      apiEndpoint: resetEndpoint,
      statusCode: res.status,
      statusText: res.statusText,
    })
  }

  return responses
}
