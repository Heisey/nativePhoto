
import * as React from 'react'
import * as firebaseAuth from 'firebase/auth'

import * as Core from 'core'

interface AuthContext {
  isLoading: boolean
  createUser: (args: Omit<Core.I.Credential, 'firebaseId'> & Pick<Core.I.UserInfo, 'username'>) => Promise<Core.I.UserRecord | undefined>
  loginWithEmail: (args: Omit<Core.I.Credential, 'firebaseId'>) => void
  logOut: () => void
  user?: firebaseAuth.User
}

export const Context = React.createContext<AuthContext | null>(null)