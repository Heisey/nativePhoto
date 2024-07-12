
import chalk from 'chalk'
import mongoose from 'mongoose'

import config from 'core/src/config/mergedConfig.json'

export const connection = async () => {
  const db = mongoose.connect(config.urls.db)

  mongoose.connection.on('connected', () => console.log(`${chalk.blue.bold('Database started successfully')} `))

  mongoose.connection.on('error', (err) => console.log(`${chalk.red.bold('Database connection error')}\n\n${err}`))

  return await db
}