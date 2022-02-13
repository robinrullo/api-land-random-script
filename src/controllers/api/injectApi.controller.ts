import { json } from 'itty-router-extras'
import { injectAllApi, resetAllApi } from '../../services/inject.service'
import { ApiResponseStatus } from '../../types'

const injectAll = async (): Promise<Response> => {
  const status: ApiResponseStatus[] = await injectAllApi()

  return json(status)
}

const resetAll = async (): Promise<Response> => {
  const status: ApiResponseStatus[] = await resetAllApi()

  return json(status)
}

export default {
  injectAll,
  resetAll,
}
