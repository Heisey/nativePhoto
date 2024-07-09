
// import Cookie from 'js-cookie'
import * as firebaseAuth from 'firebase/auth'
import * as React from 'react'
// import * as Query from '@tanstack/react-query'

// import * as Api from 'api'
import * as Services from 'services'

import * as CtxApp from './Context'

const Provider: React.FC<React.PropsWithChildren> = (props) => {
  
  // const client = Query.useQueryClient()
  const [user, userHandler] = React.useState<firebaseAuth.User | undefined>(undefined)
  const [isLoading, isLoadingHandler] = React.useState(true);

  // const setToken = async (args?: string) => {
  //   if (!args) return clearToken()
  //   Cookie.set('etnw_auth', args)
  //   return args
  // }

  // const clearToken = () => Cookie.remove('etnw_auth')

  const logOut = async () => {
    isLoadingHandler(true);
    userHandler(undefined)
    // Cookie.remove('etnw_auth')
    await firebaseAuth.signOut(Services.firebase.auth)
    // .then(clearToken);
  };

  const signUpWithEmail = async (args: { email: string, password: string }) => {
    const res = await firebaseAuth.createUserWithEmailAndPassword(Services.firebase.auth, args.email, args.password)
  }

  const loginWithGoogle = async () => {
    // const firebaseUser = await firebaseAuth.signInWithPopup(Services.firebase.auth, Services.firebase.googleProvider)
    // console.log('puppy google', firebaseUser)
    // const tokenResult = await Services.firebase.auth.currentUser?.getIdTokenResult()
    // setToken(tokenResult?.token)
    // const email = firebaseUser?.user.email
    // if (!email) return
    // const userRes = await Api.user.login({ email })
    // if (!userRes?.id) return
    // client.invalidateQueries({
    //   queryKey: ['user', email]
    // })
  }

  const loginWithEmail = async (args: { email: string, password: string }) => {
    // try {
      const res = await firebaseAuth.signInWithEmailAndPassword(Services.firebase.auth, args.email, args.password )
      console.log('puppy email res, ', res)
      
    // } catch(err: any) {
    //   console.log('code, ', err.code)
    //   console.log('message, ', err.message)
    // }
  }

  React.useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(Services.firebase.auth, async (currentUser) => {
      userHandler(currentUser || undefined)
      isLoadingHandler(false);
    });

    // const unsubscript = firebaseAuth.onAuthStateChanged(Services.firebase.auth, ())

    return () => {
      unsubscribe();
    };
  }, []);

  
  
  return (
    <CtxApp.Context.Provider
      value={{
        logOut,
        isLoading,
        signUpWithEmail,
        loginWithEmail,
        loginWithGoogle,
        user
      }}
    >
      {props.children}
    </CtxApp.Context.Provider>
  )
}

export default Provider