import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, autoChoice, autoChosen } = props;


    return (
        <div className='cart'>
            <h4>selected items:{props.cart.length}</h4>
            {
                cart.map(product => <div key={product.id} className='selected-items'>
                    <img src={product.image} alt="" />
                    <p>{product.name}</p>
                </div>)
            }
            <button onClick={() => autoChoice(cart)} className='cart-button'>Choose 1 for me</button>
            <button className='cart-button'>Choose again</button>
        </div>
    );

};

export default Cart;