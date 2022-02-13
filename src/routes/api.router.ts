import { ThrowableRouter } from 'itty-router-extras'
import { scriptsRouter } from './api/scripts.router'
import { injectApi } from './api/injectApi.router'

const { handle, all } = ThrowableRouter({ base: '/api' })

all('/scripts/*', scriptsRouter)
all('/inject/*', injectApi)

export { handle as apiRouter }
