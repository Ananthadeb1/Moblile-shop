import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [perfume, setPerfume] = useState([]);
    useEffect(() => {
        fetch('fakeapi.json')
            .then(res => res.json())
            .then(data => setPerfume(data))
    }, [])
    const [cart, setCart] = useState([]);


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
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;