
require('dotenv').config();

import chalk from 'chalk'
import cors from 'cors'
import express from 'express'
import helmut from 'helmet'
import morgan from 'morgan'

import * as Router from './router'

const PORT = parseInt(process.env.PORT as string)

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(helmut())


app.use('/api/v1/user', Router.user)

const start = async () => {
  app.listen(PORT, () => console.log(`${chalk.blue.bold('Server started on port')} ${chalk.yellowBright.bold(PORT)}`))

  // await db.connection()
}

start()