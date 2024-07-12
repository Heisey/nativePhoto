import React from 'react'
import ReactDOM from 'react-dom/client'

import * as Api from 'api'

import * as Services from '@/Services'
import App from '@/App'
import QueryProvider from '@/components/providers/Query'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Api.ApiProvider firebaseAuthInstance={Services.firebase}>
      <QueryProvider>
        <App />
      </QueryProvider>
    </Api.ApiProvider>
  </React.StrictMode>,
)
