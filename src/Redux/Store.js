import {configureStore} from '@reduxjs/toolkit';
import productSlice from './Reducers/productSlice';
import cartSlice from './Reducers/cartSlice';
import checkoutSlice from './Reducers/checkoutSlice';

const store = configureStore({
    reducer:{
        product:productSlice,
        cart:cartSlice,
        checkout: checkoutSlice,
    },
});

export default store;
