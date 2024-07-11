
import * as React from 'react'
import * as Core from 'core'

export interface AppProps extends React.PropsWithChildren {

}

const App: React.FC<AppProps> = (props) => {
  const junk = (args: Core.I.Record) => {}
  return (
    <div>
      App
    </div>
  )
}

export default App