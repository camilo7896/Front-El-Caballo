import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import router from "./routes/Routes"
import { RouterProvider } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <NextUIProvider>
  <RouterProvider router={router}/>
  </NextUIProvider>
  </React.StrictMode>,
)