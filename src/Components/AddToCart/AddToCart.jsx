import React from 'react';
import './AddToCart.css';

const AddToCart = ({ addToCart }) => {
  return (
    <div className="product-list mt-3">
      <div className="product">
        <button className='add-btn' onClick={() => addToCart({ name: 'Ring 1', price: '₹5000' })}>
          Add to Cart
        </button>
        <button className='ms-2 add-btn'>Buy Now</button>
      </div>

    </div>
  );
};

export default AddToCart;
