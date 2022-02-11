import { ThrowableRouter, withContent, withParams } from 'itty-router-extras'
import Scripts from '../../controllers/api/scripts.controller'
import ScriptController from '../../controllers/api/script.controller'

const {
  handle,
  get,
  put,
  post,
  delete: del,
} = ThrowableRouter({ base: '/api/scripts' })

get('/', Scripts)
get('/:id', withParams, ScriptController.getScriptById)
put('/:id', withParams, withContent, ScriptController.updateScript)
del('/many/:filter', withParams, ScriptController.deleteManyScripts)
del('/:id', withParams, ScriptController.deleteScript)
post('/', withContent, ScriptController.createScript)
post('/many', withContent, ScriptController.createManyScripts)

export { handle as scriptsRouter }
