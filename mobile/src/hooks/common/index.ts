
import * as ReactStack from '@react-navigation/native'

import * as AuthProvider from 'components/providers/Auth'

export const useNavigation = ReactStack.useNavigation

export const useAuth = AuthProvider.useContext
