import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*
  'CreateRoot' is an essential method in React 18 that
  facilitates modern rendering techniques, particularly 
  concurrent rendering, while providing a cleaner API
  for managing component lifecycles within specified DOM nodes.
*/
createRoot(document.getElementById('root')).render(
/*
  'StrictMode' is primarily aimed at highlighting potential 
  issues in your React code during development. It performs
  checks and provides warnings about unsafe practices,
  deprecated lifecycle methods, and unexpected side effects.
*/
  <StrictMode>
    <App />
    
  </StrictMode>
)
