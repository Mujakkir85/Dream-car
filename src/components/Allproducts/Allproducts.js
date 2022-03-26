//import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Allproducts.css'

const Allproducts = () => {

    const [cars, setCars] = useState([])
    let [sigleCarts, setsingleCart] = useState([])


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

    const [seletedItem, setseletedItem] = useState([])


    function chooseOne() {
        // console.log(sigleCarts)
        let oneItem = '';
        if (sigleCarts) {
            oneItem = sigleCarts[Math.floor(Math.random() * sigleCarts.length)];
        }
        // console.log(oneItem);
        setseletedItem(oneItem);
        //console.log(oneSeleted);
    }

    //console.log(oneSeleted);

    function remove() {
        setsingleCart([]);
        setseletedItem([]);
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

                <h2>Select Car</h2>
                {sigleCarts.map(data => <Cart key={data.id} cart={data}></Cart>)}

                <button onClick={chooseOne} className='cart-button'>CHOOSE 1 FOR ME</button>
                <button onClick={remove} className='cart-button'>CHOOSE AGAIN</button>

                <div>
                    <img className='choose-img' src={seletedItem?.picture} alt="" />
                    <h1>{seletedItem.company}</h1>
                </div>
            </div>



        </div>

    );
};

export default Allproducts;