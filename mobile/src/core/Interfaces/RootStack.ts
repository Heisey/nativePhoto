
import * as NativeRouter from '@react-navigation/native'
import * as ReactStack from '@react-navigation/stack'

export type RootStack = {
  home: undefined,
  auth: NativeRouter.NavigatorScreenParams<AuthStack>
  about: undefined
}

export type AuthStack = {
  signIn: undefined
  signUp: undefined
}