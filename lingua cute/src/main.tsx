import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { DarkModeContextProvider } from "./Context/DarkModeContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeContextProvider>
        <App />
    </DarkModeContextProvider>
  </StrictMode>,
)
