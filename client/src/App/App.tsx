
import * as React from 'react'

export interface AppProps extends React.PropsWithChildren {

}

const App: React.FC<AppProps> = (props) => {

  return (
    <div>
      App
    </div>
  )
}

export default App