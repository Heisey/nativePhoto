
import * as React from 'react'
import * as firebaseAuth from 'firebase/auth'

interface AuthContext {
  isLoading: boolean
  signUpWithEmail: (args: { email: string, password: string }) => void
  loginWithGoogle: () => void
  loginWithEmail: (args: { email: string, password: string }) => void
  logOut: () => void
  user?: firebaseAuth.User
}

export const Context = React.createContext<AuthContext | null>(null)