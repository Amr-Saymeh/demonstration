import React, { useState } from "react";
import "../pages/styles/checkout-style.css"
import Navbar from "../components/navbar"
const CheckOut = () => {
  const [invoice, setInvoice] = useState(null);

  const handleCheckout = () => {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zipCode = document.getElementById("zipCode").value;
    const nameOnCard = document.getElementById("nameOnCard").value;
    const cardNumber = document.getElementById("cardNumber").value;
    const expMonth = document.getElementById("expMonth").value;
    const expYear = document.getElementById("expYear").value;

    setInvoice({
      fullName,
      email,
      address,
      city,
      state,
      zipCode,
      nameOnCard,
      cardNumber,
      expMonth,
      expYear,
    });
  };

  if (invoice) {
    return (
      <div className="invoice">
        <h1>Invoice</h1>
        <h2>Billing Details</h2>
        <p>
          <strong>Name:</strong> {invoice.fullName}
        </p>
        <p>
          <strong>Email:</strong> {invoice.email}
        </p>
        <p>
          <strong>Address:</strong> {invoice.address}, {invoice.city},{" "}
          {invoice.state}, {invoice.zipCode}
        </p>
        <h2>Payment Details</h2>
        <p>
          <strong>Name on Card:</strong> {invoice.nameOnCard}
        </p>
        <p>
          <strong>Card Number:</strong> **** **** ****{" "}
          {invoice.cardNumber.slice(-4)}
        </p>
        <p>
          <strong>Expiration:</strong> {invoice.expMonth}/{invoice.expYear}
        </p>
        <h2>Total Amount: $192.50</h2>
        <p>Thank you for your payment!</p>
      </div>
    );
  }

  return (<div className="checkout-style">
    <div className="shop-styling"><Navbar IsWithSearch={false} extended={true} /></div>
    <div className="container">
      <h1>Payment Gateway</h1>
      <form className="payment-form">
        <div className="section billing">
          <h2>Billing Address</h2>
          <label>
            Full Name:
            <input type="text" id="fullName" placeholder="Enter your name" />
          </label>
          <label>
            Email:
            <input type="email" id="email" placeholder="Enter your email" />
          </label>
          <label>
            Address:
            <input type="text" id="address" placeholder="Enter your address" />
          </label>
          <label>
            City:
            <input type="text" id="city" placeholder="Enter your city" />
          </label>
          <label>
            State:
            <input type="text" id="state" placeholder="Enter your state" />
          </label>
          <label>
            Zip Code:
            <input type="text" id="zipCode" placeholder="Enter your zip code" />
          </label>
        </div>
        <div className="section payment">
          <h2>Payment</h2>
          <label>Accepted Cards:</label>
          <div className="card-icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/512px-PayPal_logo.svg.png" alt="PayPal" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/512px-Mastercard-logo.svg.png" alt="MasterCard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/640px-American_Express_logo_%282018%29.svg.png" alt="American Express" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
          </div>
          <label>
            Name On Card:
            <input
              type="text"
              id="nameOnCard"
              placeholder="Enter name on card"
            />
          </label>
          <label>
            Credit Card Number:
            <input
              type="text"
              id="cardNumber"
              placeholder="Enter card number"
            />
          </label>
          <label>
            Exp Month:
            <input type="text" id="expMonth" placeholder="Enter expiration month" />
          </label>
          <label>
            Exp Year:
            <input type="text" id="expYear" placeholder="Enter expiration year" />
          </label>
          <label>
            CVV:
            <input type="text" id="cvv" placeholder="Enter CVV" />
          </label>
        </div>
        <button type="button" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </form>
    </div>
  </div>
  );
};

export default CheckOut;