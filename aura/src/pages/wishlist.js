import "./styles/wishlistStyle.css";
import Navbar from "../components/navbar.js";
import { useState, useEffect } from "react";


const Wishlist = ({ addToCart }) => {
  const loadWishlistItems = () => {
    const savedWishlist = localStorage.getItem("wishlistItems");
    console.log("save to wishlist", savedWishlist);
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  };

  const [wishlistItems, setWishlistItems] = useState(loadWishlistItems());

  useEffect(() => {
    if (wishlistItems.length > 0) {
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    }
  }, [wishlistItems]);

  useEffect(() => {

    const storedItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

    setWishlistItems(storedItems);

  }, []);

  useEffect(() => {

    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));

  }, [wishlistItems]);

  const handleRemoveFromWishlist = (id) => {

    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));

  };

  const handleAddToCartAndRemoveFromWishlist = (item) => {
    addToCart(item);
    setWishlistItems((prevWishlistItems) =>
      prevWishlistItems.filter((wishlistItem) => wishlistItem.id !== item.id)
    );
  };

  return (
    <div className="shop-styling wishlist-Class">
      <div className="shop-styling"><Navbar IsWithSearch={false} /></div>
      <div className="wishlist-container">
        <section className="list-items">
          <h2>My Wishlist</h2>
          {wishlistItems.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Title</th>
                  <th>Unit Price</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.title} className="modal-img" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}€</td>
                    <td>
                      <button
                        className="remove"
                        onClick={() => handleRemoveFromWishlist(item.id)}
                      >
                        REMOVE
                      </button>
                    </td>
                    <td>
                      <button
                        className="add-to-cart"
                        onClick={() => handleAddToCartAndRemoveFromWishlist(item)}
                      >
                        ADD TO CART
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No items in the wishlist</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Wishlist;
