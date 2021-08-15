import React from 'react';
import { useSelector } from 'react-redux';
import { cartItemsTotalSelector } from './cartSelector';

const Cart = () => {
    const cartTotal = useSelector(cartItemsTotalSelector);
    return (
        <div>
            Cart {cartTotal}
        </div>
    )
}

export default Cart;