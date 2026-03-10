import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './component/Home.jsx'
import Products from './component/Products.jsx'
import Cart from './component/Cart.jsx'
import Login from './component/Login.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { AuthProvider } from './component/AuthContext.jsx'
import Dashboard from './component/Dashboard.jsx'
import PrivateRoute from './component/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "home",
        element: <Home />
      },

      {
        path: "products",
        element: <Products />
      },

      {
        path: "cart",
        element: <Cart />
      },

      {
        path: "login",
        element: <Login />,
      },

    ]
  },
  {
    path: "dashboard/",
    element: <PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)