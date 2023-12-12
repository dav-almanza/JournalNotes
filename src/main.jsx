import React from 'react'
import ReactDOM from 'react-dom/client'
import { JournalApp } from './JournalApp'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <JournalApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
