import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false);

  const toggleWishlist = () => {
    setWishlisted(!wishlisted);
  };

  return (
    <div className="product-card">
      <div className="card-inner">
        {/* Wishlist Button */}
        <button
          className={`wishlist-btn ${wishlisted ? "active" : ""}`}
          onClick={toggleWishlist}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          {wishlisted ? "♥" : "♡"}
        </button>

        <div className="thumb">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p className="card-desc">{product.category}</p>

          <div className="card-footer">
            <span className="price">₹{product.price}</span>
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
