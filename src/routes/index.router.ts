import { StatusError, ThrowableRouter } from 'itty-router-extras'
import randomScriptController from '../controllers/randomScript.controller'
import { apiRouter } from './api.router'
import testController from '../controllers/test.controller'

const { handle, all, get } = ThrowableRouter()

all('/api/*', apiRouter)
all('/', randomScriptController)
get('/test', testController)
all('*', () => {
  throw new StatusError(404, 'Resource Not Found')
})

export const handleRequest = (request: Request): Promise<Response> =>
  handle(request)
