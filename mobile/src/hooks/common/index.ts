
import * as NativeStack from '@react-navigation/native'
import * as ReactStack from '@react-navigation/stack'

import * as Core from 'core'
import * as AuthProvider from 'components/providers/Auth'

export * from './useToggle'

export const useNavigation = NativeStack.useNavigation<ReactStack.StackNavigationProp<Core.I.RootStack>>

export const useAuth = AuthProvider.useContext
