import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './styles/global.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/about.css'
import './styles/products.css'
import './styles/modal.css'
import './styles/why.css'
import './styles/globaltrade.css'
import './styles/partnership.css'
import './styles/testimonials.css'
import './styles/inquiry.css'
import './styles/contact.css'
import './styles/footer.css'
import './styles/whatsapp.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
