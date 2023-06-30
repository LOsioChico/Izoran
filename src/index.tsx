import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import './index.css'
import { ReactQueryProvider } from './infrastructure/state'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </React.StrictMode>
)
