import CartItems from "../components/cartItems.js";
import Cartsummry from "../components/cartsummry.js";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar.js";
import "./styles/cart-style.css"
import "./styles/shop-item-style.css"

const Cart = () => {
  const loadCartItems = () => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  };
  const [cartItems, setCartItems] = useState(loadCartItems());

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <div className="shop-styling">
      <div className="cart-class">
        <div className="cart-container">
          <div className="shop-styling"><Navbar IsWithSearch={false} /></div>
          <CartItems cartItems={cartItems} setCartItems={setCartItems} />
          <Cartsummry cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
}

export default Cart;