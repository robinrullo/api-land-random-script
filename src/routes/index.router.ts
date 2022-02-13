import { StatusError, ThrowableRouter, withParams } from 'itty-router-extras'
import { apiRouter } from './api.router'
import testController from '../controllers/test.controller'
import { jsScriptRouter } from './jsScript.router'

const { handle, all, get } = ThrowableRouter()

all('/api/*', apiRouter)
get('/test/:id?', withParams, testController)
all('/*', jsScriptRouter)
all('*', () => {
  throw new StatusError(404, 'Resource Not Found')
})

export const handleRequest = (request: Request): Promise<Response> =>
  handle(request)
