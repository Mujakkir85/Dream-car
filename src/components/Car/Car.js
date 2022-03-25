import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Car.css'

const Car = ({ cars }) => {
    const { picture, company, price } = cars;
    console.log(picture, company)
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <p className='porduct-name'>{company}</p>
                <p>Price: {price}</p>

            </div>
            {/* onClick={() => handleAddToCart(product)} */}
            <button className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
                <FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Car;