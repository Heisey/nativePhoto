
import * as NativeRouter from '@react-navigation/native'
import * as ReactStack from '@react-navigation/stack'

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