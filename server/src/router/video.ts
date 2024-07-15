
import express from 'express'

import * as Controllers from '../controllers'
import * as Middleware from '../middleware'

const router = express.Router()

// router.use(Middleware.checkToken)

router.post('/', Controllers.video.create)

router.get('/', Controllers.video.get)

export default router