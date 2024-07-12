
import * as React from 'react'
import * as firebaseAuth from 'firebase/auth'

import * as Core from 'core'

interface AuthContext {
  isLoading: boolean
  createUser: (args: Core.I.Credential & Pick<Core.I.UserInfo, 'username'>) => void
  loginWithEmail: (args: { email: string, password: string }) => void
  logOut: () => void
  user?: firebaseAuth.User
}

export const Context = React.createContext<AuthContext | null>(null)