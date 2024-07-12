
// Project Only:mobile

import * as NativeRouter from '@react-navigation/native'

export type RootStack = {
  landing: undefined,
  auth: NativeRouter.NavigatorScreenParams<AuthStack>
  main: NativeRouter.NavigatorScreenParams<MainStack>
}

export type AuthStack = {
  signIn: undefined
  signUp: undefined
}

export type MainStack = {
  home: undefined
  bookmark: undefined
  create: undefined
  profile: undefined
}