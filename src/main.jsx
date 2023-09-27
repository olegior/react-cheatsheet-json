import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeContext } from './components/ThemeContext';
import Home from './components/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext>
        <Home />
    </ThemeContext>
  </React.StrictMode>,
)
