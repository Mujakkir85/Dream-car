//import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Allproducts.css'

const Allproducts = () => {

    const [cars, setCars] = useState([])
    const [sigleCarts, setsingleCart] = useState([])


    useEffect(() => {

        fetch('products.json')
            .then(Response => Response.json())
            .then(data => setCars(data))
    }, [])

    const addToCart = (value) => {
        console.log(value);
        setsingleCart([...sigleCarts, value]);
        console.log(sigleCarts);
    }



    return (
        <div className='products-container'>
            <div className='all-products'>
                {cars.map(car => <Car
                    key={car.id}
                    cars={car}
                    addToCart={addToCart}
                ></Car>)}
            </div>
            <div className='cart-container'>
                <h2>{sigleCarts.length}</h2>
                {/* <Cart>
                    
                </Cart> */}
            </div>

        </div>

    );
};

export default Allproducts;