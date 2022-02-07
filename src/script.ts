export interface Script {
  title: string
  content: string
}

export const getRandomScript = async (): Promise<Script> => {
  const headers = new Headers()
  headers.set('X-jsonblob', BLOB_ID)

  const res = await fetch(API_URL, { headers })
  const scripts: Script[] = await res.json<Script[]>()

  return scripts[Math.floor(Math.random() * scripts.length)]
}
