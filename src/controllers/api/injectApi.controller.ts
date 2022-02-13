import { json } from 'itty-router-extras'
import { injectAllApi } from '../../services/inject.service'
import { injectionStatus } from '../../types'

const injectAll = async (): Promise<Response> => {
  const status: injectionStatus[] = await injectAllApi()

  return json(status)
}

export default {
  injectAll,
}
