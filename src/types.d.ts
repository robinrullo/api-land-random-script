type scriptFilter = 'all' | 'activated' | 'disabled'

type Script = {
  id: number
  name: string
  content: string
  isActivated: string
}

export type APIResource = {
  name: string
  path: string
  content: any
}

export type APICollectionResource = {
  name: string
  path: string,
  children: APIResource[]
}


type ApiResponseStatus = {
  apiEndpoint: string
  statusCode?: number
  statusText?: string
}

type RequestParam<T extends string, U> = {
  [key in T]: U
}
type RequestBody<T> = {
  content: T
}
