import { APIInject, ApiResponseStatus } from '../types'
import { allAPI } from '../APIEntries.constants'

const makeInjection = async (API: APIInject): Promise<Response> => {
  return await fetch(API.endpoint, {
    method: 'POST',
    body: JSON.stringify(API.content),
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
}

export const injectAllApi = async (): Promise<ApiResponseStatus[]> => {
  const fetchResponses: ApiResponseStatus[] = []
  for (const API of allAPI) {
    const res = await makeInjection(API)
    fetchResponses.push({
      apiEndpoint: API.endpoint,
      statusCode: res.status,
      statusText: res.statusText,
    })
  }

  return fetchResponses
}

export const resetAllApi = async (): Promise<ApiResponseStatus[]> => {
  const responses: ApiResponseStatus[] = []

  const resetEndpoints = new Set(allAPI.map((api) => api.resetEndpoint))

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
