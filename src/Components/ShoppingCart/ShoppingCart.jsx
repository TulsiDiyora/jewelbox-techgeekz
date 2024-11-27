import React from 'react'

const ShoppingCart = ({ count }) => {
    return (
        <div className="icons">
            <i class="bi bi-search"></i>
            <i class="bi bi-star ms-4"></i>
            <i class="bi bi-person ms-4"></i>
            <div className="shopping-cart-icon ms-4" style={{ position: 'relative' }}>
            <i className="bi bi-bag-fill" ></i>
            {count > 0 && (
                <span className="cart-count">
                    {count}
                </span>
            )}
        </div>
        </div>
    )
}

export default ShoppingCart
