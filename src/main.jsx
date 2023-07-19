import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeRoutes from './routes/home.jsx'
import RootRoutes from './routes/rootRoutes.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element : <RootRoutes />,
    errorElement : <h1>NOT FOUND</h1>,
    children : [
      {
        path: '/',
        element : <HomeRoutes />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
