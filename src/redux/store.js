import { configureStore } from "@reduxjs/toolkit";
import wishlist from "./slices/wishlist";
import cartSlice from "./slices/cartSlice";


const store= configureStore({
    reducer:{
       wishlistReducer:wishlist,
       cartReducer:cartSlice
    }
})

export default store;