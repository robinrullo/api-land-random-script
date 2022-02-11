import { handleRequest } from './routes/index.router'

addEventListener('fetch', (event) => {
  event.respondWith(
    handleRequest(event.request).then((res: Response) => {
      res.headers.set('Access-Control-Allow-Origin', '*')
      return res
    }),
  )
})
