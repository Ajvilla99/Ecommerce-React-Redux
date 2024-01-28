import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { ecommerceSlice, setProducts } from "./ecommerce";
import { products } from "./ecommerce/dataProduct";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ecommerce: ecommerceSlice.reducer,
    }
})

store.dispatch(setProducts(products));