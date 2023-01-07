import { ThrowableRouter } from 'itty-router-extras'
import { scriptsRouter } from './api/scripts.router'
import { injectApiRouter } from './api/injectApi.router'
import { apisRouter } from './api/apis.router'

const { handle, all } = ThrowableRouter({ base: '/api' })

all('/scripts/*', scriptsRouter)
all('/inject/*', injectApiRouter)
all('/apis/*', apisRouter)

export { handle as apiRouter }
