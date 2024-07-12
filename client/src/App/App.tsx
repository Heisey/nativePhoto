
import * as React from 'react'

import * as ApiHooks from 'api'

import * as Services from '@/Services'

export interface AppProps extends React.PropsWithChildren {

}

const App: React.FC<AppProps> = (props) => {

  const createUser = ApiHooks.user.useCreateUser()


  const fetch = async () => {
    const res = await createUser.mutateAsync({ email: 'puppy', password: '123', username: 'woof', firebaseId: Services.firebase.auth.currentUser?.uid || '' })

    console.log('puppy res, ', res)
  }

  return (
    <div>
      <button onClick={fetch}>fetch</button>
    </div>
  )
}

export default App