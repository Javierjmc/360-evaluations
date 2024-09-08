import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { DataProvider } from './lib/Context.jsx'
import { Dashboard360 } from './routes/Dashboard360'
import { Form360 } from './routes/Form360'
import { Login } from './routes/Login'


const routes = createBrowserRouter([
  {
    path:'/',
    element: <Login />
  },
  {
    path:'/dashboard',
    element: <Dashboard360 />
  },
  {
    path:'/feedback/:id',
    element: <Form360 />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={routes} />
    </DataProvider>
  </StrictMode>,
)
