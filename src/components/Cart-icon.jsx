import React from 'react';
import {useSelector} from "react-redux";

const CartIcon = () => {
    const count_products = useSelector(state => state.bag.length)
    const open = () => {
        document.querySelector('.bag').style.display = 'flex'
    }

    return (
        <div className="cart-icon"
            onClick={() => open()}
        >
            <span>{(count_products === 0) ? '' : count_products}</span>
        </div>
    );
};

export default CartIcon;