
import * as React from 'react'

import * as ApiHooks from 'api'

export interface AppProps extends React.PropsWithChildren {

}

const App: React.FC<AppProps> = (props) => {

  const user = ApiHooks.user.useGet()
  const createUser = ApiHooks.user.useCreateUser()

  if (user.isLoading) return <div>loading</div>

  const fetch = async () => {

    const res = await createUser.mutateAsync({ email: 'puppy', password: '123', username: 'woof' })

    console.log('puppy res, ', res)
  }

  fetch()
  return (
    <div>
      App
    </div>
  )
}

export default App