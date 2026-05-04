import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './routes/router'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import AppProvider from './hooks'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Router />
    </AppProvider>
    <GlobalStyles />
    <ToastContainer position="top-center" autoClose={4000} />
  </StrictMode>
)
