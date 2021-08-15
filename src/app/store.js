import { useReducer } from "react";
import counterReducer from "../features/Counter/counterSlice";
import userReducer from "../features/Auth/userSlice";
import productReducer from "../features/Product/productSlice";
import cartReducer from "../features/Cart/cartSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    counter: counterReducer,
    user: userReducer,
    product: productReducer,
    cart: cartReducer
};

const store = configureStore({
    reducer: rootReducer,

})

export default store;