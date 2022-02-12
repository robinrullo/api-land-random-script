import { ThrowableRouter, withParams } from 'itty-router-extras'
import injectionController from '../controllers/injection.controller'

const { handle, all } = ThrowableRouter()

all('/', injectionController.RandomScript)
all('/:id', withParams, injectionController.ScriptById)

export { handle as injectionRouter }
