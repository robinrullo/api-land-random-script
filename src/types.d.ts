export type scriptFilter = 'all' | 'activated' | 'disabled'

export type Script = {
  id: number
  name: string
  content: string
  isActivated: string
}

type APIInject = {
  endpoint: string
  content: any
}

type injectionStatus = {
  api: string
  statusCode?: number
  statusText?: string
}
