// import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Allproducts.css'

const Allproducts = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {

        fetch('products.json')
            .then(Response => Response.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div className='products-container'>
            <div className='all-products'>

            </div>
            <div className='cart-container'>
                <h1>helloooo</h1>
                <Cart></Cart>
            </div>

        </div>

    );
};

export default Allproducts;