import React from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Cart from "./components/Cart";
import {CartProvider} from 'react-use-cart'

const App = () => {
  return ( <>
  <CartProvider>
  <Home/>
  <Cart/>
  </CartProvider>
 
  </> );
}
 
export default App;