
import {configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth";

export const store =()=>{ 
    return configureStore({
    reducer:{
        authApi:authApi.reducer
    },
    middleware:(mid)=>mid().concat(authApi.middleware)
})
}