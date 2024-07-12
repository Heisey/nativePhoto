
import * as firebaseAuth from 'firebase/auth'
import * as React from 'react'
// import * as Query from '@tanstack/react-query'

import * as Api from 'api'
import * as Core from 'core'
import * as Services from 'services'

import * as CtxApp from './Context'

const Provider: React.FC<React.PropsWithChildren> = (props) => {
  
  // const client = Query.useQueryClient()
  const createUserApi = Api.user.useCreateUser()
  const [user, userHandler] = React.useState<firebaseAuth.User | undefined>(undefined)
  const [isLoading, isLoadingHandler] = React.useState(true);

  const createUser = async (args: Core.I.Credential & Pick<Core.I.UserInfo, 'username'>) => {
    const firebaseRes = await firebaseAuth.createUserWithEmailAndPassword(Services.firebase.auth, args.email, args.password)
    if (!firebaseRes.user.uid) throw new Error('Firebase create error')
    const serverRes = await createUserApi.mutateAsync(args)
    if (!serverRes?.id) {
      firebaseAuth.deleteUser(firebaseRes.user)
      throw new Error('Server Create Error')
    }
  }

  const logOut = async () => {
    isLoadingHandler(true);
    userHandler(undefined)
    await firebaseAuth.signOut(Services.firebase.auth)
  };


  const loginWithEmail = async (args: Core.I.Credential) => await firebaseAuth.signInWithEmailAndPassword(Services.firebase.auth, args.email, args.password )

  React.useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(Services.firebase.auth, async (currentUser) => {
      userHandler(currentUser || undefined)
      isLoadingHandler(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  
  
  return (
    <CtxApp.Context.Provider
      value={{
        logOut,
        isLoading,
        createUser,
        loginWithEmail,
        user
      }}
    >
      {props.children}
    </CtxApp.Context.Provider>
  )
}

export default Provider