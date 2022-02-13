import { APIInject, injectionStatus } from '../types'
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

export const injectAllApi = async (): Promise<injectionStatus[]> => {
  const fetchResponses: injectionStatus[] = []
  for (const API of allAPI) {
    const res = await makeInjection(API)
    fetchResponses.push({
      api: API.endpoint,
      statusCode: res.status,
      statusText: res.statusText,
    })
  }

  return fetchResponses
}
