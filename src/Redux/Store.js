import {configureStore} from '@reduxjs/toolkit';
import productSlice from './Reducers/productSlice';
import cartSlice from './Reducers/cartSlice';

const store = configureStore({
    reducer:{
        product:productSlice,
        cart:cartSlice,
    },
});

export default store;
