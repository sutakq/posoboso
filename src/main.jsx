import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import './assets/index.js'
import router from './router/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
