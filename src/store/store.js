import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { ecommerceSlice, setCategories, setProducts } from "./ecommerce";
import { products } from "./ecommerce/dataProduct";
import { categories } from "./ecommerce/dataCategories";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ecommerce: ecommerceSlice.reducer,
    }
})

store.dispatch(setProducts(products));
store.dispatch(setCategories(categories));