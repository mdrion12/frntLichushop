import { Link, Outlet } from "react-router-dom"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import { CartProvider } from "./component/CartContext"
function App() {
  return (
    <>
      <CartProvider>
        <Navbar></Navbar>
        <Outlet />
        <Footer></Footer>
      </CartProvider>
    </>
  )
}

export default App