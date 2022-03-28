import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import { random } from '../utilities';
import './Shop.css'

const Shop = (props) => {
    const [perfume, setPerfume] = useState([]);
    useState(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => setPerfume(data))
    }, [])
    const [cart, setCart] = useState([]);

    const autoChoice = (cart) => {
        const anonymousNum = random(cart.length);
        const chosen = cart[anonymousNum];


    }

    const addHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    perfume.map(product => <Product addhandler={addHandler} key={product.id} product={product}></Product>)
                }
            </div>
            <div>
                <Cart cart={cart} autoChoice={autoChoice} ></Cart>
            </div>
        </div>
    );
};

export default Shop;