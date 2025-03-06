import { useState } from "react";
import "../pages/styles/shop-item-style.css";
import "../pages/styles/shop-modal-style.css";
import { Link } from "react-router-dom";


const ShopItem = ({ data, addToCart, cartItems, toggleWishlistItem, wishlistItems }) => {

    const [Modal, SetModal] = useState(false);

    const ToggleModal = () => {
        SetModal(!Modal);
    };

    if (!data) {
        return <div className="error">Invalid item data.</div>;
    }

    const isItemInCart = data && (cartItems || []).some(item => item.id === data.id);
    const isItemInWishlist = data && (wishlistItems || []).some(item => item.id === data.id);




    return (
        <div className="card">
            <div className="wrapper">
                <div className="img-container">
                    <img
                        className="card-image"
                        src={data.image}
                        alt={data.title}
                        width="200px"
                    />
                    <button onClick={ToggleModal} className="view-btn">
                        View
                    </button>

                    {Modal && (
                        <>
                            <div className="shop-styling overlay" onClick={ToggleModal} />
                            <div className="shop-styling pop-up">
                                <div className="content-wrapper">
                                    <div className="left-section">
                                        <img className="modal-img" src={data.image} alt={data.title} />
                                        <h1 className="left-title">{data.title}</h1>
                                        <p className="description left-desc">{data.description}</p>
                                    </div>
                                    <div className="right-section">
                                        <div className="right-desc">
                                            <h1>{data.title}</h1>
                                            <Link to="/profile2"><p className=" n_name">{data.subtitle}</p></Link>
                                            <p className="small-s description">{data.description}</p>
                                        </div>
                                        <div className="action-buttons">
                                            <div>
                                                <h2>License</h2>
                                                <p>Item Price: ${data.price}</p>
                                            </div>
                                            <div className="buttons-container">
                                                <button
                                                    onClick={() => isItemInCart ? window.location.href = '/cart' : addToCart(data)}
                                                >
                                                    {isItemInCart ? "See in Cart" : "Add to Cart"}
                                                </button>
                                                <div className={isItemInCart ? "like-btn filter-disabled" : "like-btn"} >
                                                    <label className="like-btn container">

                                                        <input
                                                            type="checkbox"
                                                            defaultChecked={isItemInWishlist}
                                                            onChange={() => { if (!isItemInCart) { toggleWishlistItem(data); } }} disabled={isItemInCart}
                                                            {...isItemInWishlist ? "" : ""} />

                                                        <div className="like-btn checkmark">
                                                            <svg viewBox="0 0 256 256">
                                                                <rect fill="none" height={256} width={256} />
                                                                <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" strokeWidth="20px" stroke="#FFF" fill="none" />
                                                            </svg>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="license-info">
                                            <h2>Details</h2>
                                            <p>License: Standard</p>
                                            <p>Published: {data.subtitle}</p>
                                            <p>Age Rating: Everyone</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="content">
                    <p className="title">{data.title}</p>
                    <p className=" A_name">in {data.category}</p>
                    <p className="price">${data.price}</p>
                    <span></span>
                </div>
                <button
                    className='card-btn'
                    onClick={() => isItemInCart ? window.location.href = '/cart' : addToCart(data)}
                >
                    {isItemInCart ? "See in Cart" : "Add to Cart"}
                </button>
            </div>
        </div>
    );
};

export default ShopItem;
