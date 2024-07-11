
import * as React from 'react'

import * as ApiHooks from 'api'

export interface AppProps extends React.PropsWithChildren {

}

const App: React.FC<AppProps> = (props) => {

  const user = ApiHooks.user.useGet()

  if (user.isLoading) return <div>loading</div>

  console.log('puppy log, ', user.data)

  return (
    <div>
      App
    </div>
  )
}

export default App