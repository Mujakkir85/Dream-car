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
        //console.log(value);
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

                {/* <Cart cart={sigleCarts}></Cart> */}
                <h2>Select Car</h2>
                {sigleCarts.map(data => <Cart key={data.id} cart={data}></Cart>)}
                <button className='cart-button'>CHOOSE 1 FOR ME</button>
                <button className='cart-button'>CHOOSE AGAIN</button>
            </div>

        </div>

    );
};

export default Allproducts;