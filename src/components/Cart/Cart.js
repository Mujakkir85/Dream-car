import React from 'react';
import './Cart.css'


const Cart = ({ cart }) => {
    // console.log(cart);
    const { picture, company } = cart

    return (
        // <div className='cart'>

        <div className='cart-details'>
            <img src={picture} alt="" />
            <h5>{company}</h5> <br />

        </div>

        // </div >

    );
};

export default Cart;