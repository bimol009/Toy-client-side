import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './Provider/AuthProvider'
import router from './routes/Routes.jsx'
import 'react-tabs/style/react-tabs.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <div className='p-1'>
    <RouterProvider router={router}></RouterProvider>
    </div>
    </AuthProvider>
  </React.StrictMode>,
)
