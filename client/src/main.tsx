import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App'
import QueryProvider from '@/components/providers/Query'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>,
)
