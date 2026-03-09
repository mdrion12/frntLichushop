import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './component/Home.jsx'
import Products from './component/Products.jsx'
import Cart from './component/Cart.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "home/",
        element: <Home />
      },
      {
        path: "products/",
        element: <Products />
      },
      {
        path: "products/:id",
        element: <Products />
      },
      {
        path: "cart",
        element: <Cart />
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)