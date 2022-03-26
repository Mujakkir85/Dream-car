import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Car.css'


const Car = ({ cars, addToCart }) => {
    const { picture, company, price } = cars;
    //console.log(picture, company)

    //console.log(cars)

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <p className='porduct-name'>{company}</p>
                <p>Price: {price}</p>
            </div>

            <button onClick={() => addToCart(cars)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Car;


