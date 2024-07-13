
import express from 'express'

import * as Router from '.'

const router = express.Router()

router.use('/user', Router.user)

router.use('/video', Router.video)

export default router