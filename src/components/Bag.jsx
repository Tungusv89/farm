import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeFrom, removeSingleItemFromCart} from "../slices/bagSlice";

const Bag = () => {
    const products = useSelector(state => state.bag)
    const dispatch = useDispatch()
    const removeToBag = (product) => {
        dispatch(removeSingleItemFromCart(product.id));
    };

    const close = () => {
        document.querySelector('.bag').style.display = 'none'
    }

    return (
        <div className='bag' style={{display: 'none', flexDirection: 'column', width: '100%', height: '100svh', position: 'fixed', top: '0', left: '0', backgroundColor: 'white', zIndex: '2'}}>
            <div onClick={() => close()}
                 style={{cursor: 'pointer', textAlign: 'end'}}
            >X</div>
            <div>Корзина</div>
            <div className='list-products'>
                {products.map((product) => (
                    <div key={product.id} style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div><img style={{width: '40px', borderRadius: '50%'}} src={product.imageWebp} alt=''/></div>
                        <div>{product.good}</div>
                        <div>{product.value} {product.unit}</div>
                        <div>{product.priceInNumbers * product.value} руб.</div>
                        <div style={{cursor: 'pointer'}} onClick={() => removeToBag(product)}
                        >Х</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bag;