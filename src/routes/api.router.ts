import { ThrowableRouter } from 'itty-router-extras'
import { scriptsRouter } from './api/scripts.router'

const { handle, all } = ThrowableRouter({ base: '/api' })

all('/scripts/*', scriptsRouter)

export { handle as apiRouter }
