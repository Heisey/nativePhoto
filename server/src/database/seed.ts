
import chalk from 'chalk'

import * as DB from '.'
import * as Seed from '../seed'

const createUsers = async (args: number = 50) => {
  await DB.clearData()
  console.log(chalk.blueBright.bold('Starting Seed'))
  
  
  for (let i = 0; i < args; i ++) {
    // console.log(chalk.blueBright.bold('Record Create Start\n'))

    const user = await Seed.createUserAndContent()

    if (!user?.id) console.log(chalk.magenta.bold('Unable to create user record'))

    console.log(`${chalk.blueBright.bold(`Successfully created record set for`)} ${chalk.yellowBright.bold(`${user?._id}`)}`)
  }

  console.log(chalk.blueBright.bold(`Created ${args} succesfully`))
  process.exit()
}

createUsers()