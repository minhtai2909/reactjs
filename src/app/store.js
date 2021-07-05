import { useReducer } from "react";
import counterReducer from "../features/Counter/counterSlice";
import userReducer from "../features/Auth/userSlice";
import productReducer from "../features/Product/productSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
    counter: counterReducer,
    user: userReducer,
    product: productReducer,
};

const store = configureStore({
    reducer: rootReducer,

})

export default store;