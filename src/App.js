
import { HashRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Shop from "./pages/shop";
import Main from "./pages/main";
import Cart from "./pages/cart";
import CheckOut from "./pages/checkout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Verification from "./pages/Verification";
import ForgotPassword from "./pages/ForgotPassword";
import Profile2 from "./pages/profile2";
import Profile from "./pages/profile";
import Upload from "./pages/upload";
import DefaultShopItems from "./data/shop-items-data.json"
import Community from "./pages/community"
import Wishlist from "./pages/wishlist"
function App() {
  localStorage.setItem('shopItems', JSON.stringify(DefaultShopItems));
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
  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      const updatedCart = [...prevCartItems, item];
      return updatedCart;
    });
  };
  const [isSignedIn, setIsSignedIn] = useState(() => {
    const storedStatus = localStorage.getItem('isSignedIn');
    return storedStatus ? JSON.parse(storedStatus) : false;
  });
  useEffect(() => {
    localStorage.setItem('isSignedIn', JSON.stringify(isSignedIn));
  }, [isSignedIn]);

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route index element={<Shop addToCart={addToCart} cartItems={cartItems} />} />
          <Route path="/demonstration/home" element={<Main />} />
          <Route path="/demonstration/shop" element={<Shop addToCart={addToCart} cartItems={cartItems} />} />
          <Route path="/demonstration/cart" element={<Cart />} />
          <Route path="/demonstration/wishlist" element={<Wishlist addToCart={addToCart} cartItems={cartItems} data={DefaultShopItems} />} />
          <Route path="/demonstration/community" element={<Community />} />
          <Route path="/demonstration/sign-in" element={<SignIn />} />
          <Route path="/demonstration/sign-up" element={<SignUp />} />
          <Route path="/demonstration/reset-pass" element={<ResetPassword />} />
          <Route path="/demonstration/verification" element={<Verification />} />
          <Route path="/demonstration/forgot-pass" element={<ForgotPassword />} />
          <Route path="/demonstration/checkout" element={<CheckOut />} />
          <Route path="/demonstration/profile" element={<Profile />} />
          <Route path="/demonstration/profile2" element={<Profile2 />} />
          <Route path="/demonstration/upload" element={<Upload />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;