
import { useState, useEffect } from "react";

const CartItems = ({ cartItems, setCartItems }) => {

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("wishlistItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {

    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    setCartItems(storedItems);

  }, []);

  useEffect(() => {

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

  }, [cartItems]);


  const handleRemoveFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  return (
    <section className="cart-items">
      <h2>Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Title</th>
              <th>Unit Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.title} className="modal-img" />
                </td>
                <td>{item.title}</td>
                <td>{item.price}€</td>
                <td>
                  <button className="clear" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items in the cart</p>
      )}
    </section>
  );
};

export default CartItems;