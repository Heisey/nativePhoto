
import chalk from 'chalk'
import cors from 'cors'
import express from 'express'
import helmut from 'helmet'
import morgan from 'morgan'

import config from 'core/src/config/mergedConfig.json'

import * as db from './database'
import * as router from './router'

const PORT = config.ports.server

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(helmut())


app.use('/api/v1', router.base)

const start = async () => {
  app.listen(PORT, () => console.log(`${chalk.blue.bold('Server started on port')} ${chalk.yellowBright.bold(PORT)}`))

  await db.connection()
}

start()