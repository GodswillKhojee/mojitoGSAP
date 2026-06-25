import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './components/Hero.jsx'
import Cocktails from './components/Cocktails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Hero/>
    <Cocktails  />
  </StrictMode>,
)
