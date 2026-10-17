import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initGA4 } from './utils/analytics'
import { GA4_CONFIG } from './config/constants'

// Initialize Google Analytics 4
if (GA4_CONFIG.IS_ENABLED) {
  initGA4()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
