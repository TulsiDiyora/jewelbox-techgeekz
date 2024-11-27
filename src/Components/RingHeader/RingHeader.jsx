import React from 'react';
import Logo from '../../assets/Logo.jpg';
import './RingHeader.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

function RingHeader({ cartCount }) {
    return (
        <header className='my-5'>
            <div className="container">
                <div className="nav d-flex justify-content-between align-items-center">
                    <div className="logo mx-auto">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <ShoppingCart count={cartCount} />
                    
                </div>
            </div>
        </header>
    );
}

export default RingHeader;
