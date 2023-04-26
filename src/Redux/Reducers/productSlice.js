import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
import {product} from '../../Data/data'

const STATUS = {
    idle:'idle',
    loading:'loading',
    error:'error',
}

const initialState = {
    status: 'loading',
    product: [],
}

// const url = 'https://fakestoreapi.com/products';

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setStatus(state, action){
            state.status = action.payload;
        },
        setProduct(state, action) {
            state.product = action.payload;
        }
    }
})

export function FetchProduct() {
    return async function fetchProduct(dispatch) {
        try {
            dispatch(setStatus(STATUS.loading))
            // const res = await axios.get(url);
            dispatch(setProduct(product))
            dispatch(setStatus(STATUS.idle))
        }
        catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.error))
        }
    }
}

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;