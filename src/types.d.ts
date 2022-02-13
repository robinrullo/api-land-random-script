export type scriptFilter = 'all' | 'activated' | 'disabled'

export type Script = {
  id: number
  name: string
  content: string
  isActivated: string
}

type APIInject = {
  endpoint: string
  resetEndpoint: string
  content: any
}

type ApiResponseStatus = {
  apiEndpoint: string
  statusCode?: number
  statusText?: string
}
