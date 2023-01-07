import { ThrowableRouter, withContent, withParams } from 'itty-router-extras'
import apisController from '../../controllers/api/apis.controller'

const { handle, get, put, delete: del, post } = ThrowableRouter({ base: '/api/apis' })

get('/', apisController.getApiCollections)
get('/:collectionName', withParams, apisController.getApiCollection)
post('/', withContent, apisController.createApiCollection)
put('/:collectionName', withParams, withContent, apisController.updateApiCollection)
del('/:collectionName', withParams, apisController.deleteApiCollection)
get('/:collectionName/:resourceName', withParams, apisController.getApiResource)
post('/:collectionName/', withParams, withContent, apisController.createApiResource)
put('/:collectionName/:resourceName', withParams, withContent, apisController.updateApiResource)
del('/:collectionName/:resourceName', withParams, apisController.deleteApiResource)

export { handle as apisRouter }
