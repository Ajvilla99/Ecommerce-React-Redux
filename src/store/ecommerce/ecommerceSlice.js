import { createSlice } from '@reduxjs/toolkit';

export const ecommerceSlice = createSlice({
    name: 'ecommerce',
    initialState: {
        products: [],
        categories: [],
        cart: [],
        user: null
    },
    reducers: {
        addToCart: ( state, action ) => {
            state.cart.push(action.payload);
        },
        setProducts: (state, action ) => {
            state.products = action.payload;
        },
        setCategories: (state, action ) => {
            state.categories = action.payload;
        },
    },
});


export const { 
    addToCart,
    setProducts,
    setCategories


} = ecommerceSlice.actions;