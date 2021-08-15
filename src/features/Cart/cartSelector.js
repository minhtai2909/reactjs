import { createSelector } from "@reduxjs/toolkit";

const cartItemsSelector = state => state.cart.cartItems;

export const cartItemsCountSelector = createSelector(
    cartItemsSelector,
    (cartItems) => cartItems.reducer((count, item) => count + item.quantity, 0)
);

export const cartItemsTotalSelector = createSelector(
    cartItemsSelector,
    (cartItems) => cartItems.reducer((Total, item) => Total + (item.product.salePrice * item.quantity), 0)
);