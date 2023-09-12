import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CartContextProvider } from "./context/cartContext";
import Products from "./pages/product/Products";
import {Cart} from "./pages/cart/Cart";

function App() {
  return (
    <>
      <CartContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </Router>
      </CartContextProvider>
    </>
  );
}

export default App;
