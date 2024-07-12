
import express from 'express'

import * as Controllers from '../controllers'
import * as Middleware from '../middleware'

const router = express.Router()

router.post('/', Middleware.checkToken, Controllers.user.create)
router.get('/', Controllers.user.getByEmail)

export default router