export type scriptFilter = 'all' | 'activated' | 'disabled'

export type Script = {
  id: number
  name: string
  content: string
  isActivated: string
}
