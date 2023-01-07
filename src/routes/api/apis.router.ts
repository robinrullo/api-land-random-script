import { ThrowableRouter, withParams } from 'itty-router-extras'
import apisController from '../../controllers/api/apis.controller'

const { handle, get, put, delete: del, post } = ThrowableRouter({ base: '/api/apis' })

get('/', apisController.getApiCollections)
get('/:collectionName', withParams, apisController.getApiCollection)
post('/', apisController.createApiCollection)
put('/:collectionName', withParams, apisController.updateApiCollection)
del('/:name', withParams, apisController.deleteApiCollection)
get('/:collectionName/:resourceName', withParams, apisController.getApiResource)
post('/:collectionName/', withParams, apisController.createApiResource)
put('/:collectionName/:resourceName', withParams, apisController.updateApiResource)
del('/:collectionName/:resourceName', withParams, apisController.deleteApiResource)

export { handle as apisRouter }
