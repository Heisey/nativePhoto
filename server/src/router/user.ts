
import express from 'express'

import * as Controllers from '../controllers'

const router = express.Router()

router.post('/', Controllers.user.create)
router.get('/', Controllers.user.get)

export default router