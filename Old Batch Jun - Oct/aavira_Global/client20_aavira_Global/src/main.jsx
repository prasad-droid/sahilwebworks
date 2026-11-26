import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './LanguageContext.jsx'

// Import all CSS files to bundle them automatically
import '../styles/main.css'
import '../styles/layout.css'
import '../styles/components.css'
import '../styles/map.css'
import '../styles/responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)
