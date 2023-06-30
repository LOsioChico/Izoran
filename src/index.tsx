import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ReactQueryProvider } from './infrastructure/state'
import { AppRoutes } from './presentation/AppRoutes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <AppRoutes />
    </ReactQueryProvider>
  </React.StrictMode>
)
