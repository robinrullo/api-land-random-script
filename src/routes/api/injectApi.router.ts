import { ThrowableRouter } from 'itty-router-extras'
import injectApiController from '../../controllers/api/injectApi.controller'

const { handle, get } = ThrowableRouter({ base: '/api/inject' })

get('/all', injectApiController.injectAll)

export { handle as injectApi }
