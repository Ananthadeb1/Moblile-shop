import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, image, price, brand, rating } = props.product;

    const addhandler = props.addhandler;
    return (
        <div className='product'>
            <div className='product-info'>
                <img src={image} alt="" />
                <h2>{name}</h2>
                <p>Price : {price}$</p>
                <p>Brand : <strong>{brand}</strong></p>
                <p>Rating :{rating}</p>
            </div>
            <button onClick={() => addhandler(props.product)} className='button'>Add to List</button>
        </div>
    );
};

export default Product;