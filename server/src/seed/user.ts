
import { faker } from '@faker-js/faker'
import chalk from 'chalk'

import * as Core from 'core'

import * as Models from '../models'
import * as Seed from '.'
import * as Services from '../services'

interface NewUser extends Core.I.UserInfo, Core.I.Credential {
}

interface GenerateUserData extends Core.I.Credential {
}

const generateUserData = (args: GenerateUserData): NewUser => ({
  firebaseId: args.firebaseId,
  email: args.email,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  username: faker.internet.userName(),
  password: args.password
})

export const createUser = async () => {
  const email = faker.internet.email()
  const password = 'Puppy1234'
  
  const firebaseRes = await Services.firebase.auth.createUser({ email, password })
  
  if (!firebaseRes.uid) return
  
  const user = await new Models.User(generateUserData({ email, firebaseId: firebaseRes.uid, password })).save()
  
  return user

}

export const createUserAndContent = async () => {
  const user = await createUser()
  if (!user) return
  for (let i = 0; i < 5; i++) await Seed.createVideo(user?._id)
  return user
}