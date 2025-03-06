import { Link } from "react-router-dom";

const Cartsummry = ({ cartItems }) => {
  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const totalPrice = calculateTotalPrice(cartItems);

  return (
    <div className="summary">
      <h3>Summary</h3>
      <p>
        Subtotal: <span>{totalPrice}€</span>
      </p>
      <Link to="/checkout">
        <button className="checkout">Go to Checkout</button>
      </Link>
    </div>
  );
};


export default Cartsummry;