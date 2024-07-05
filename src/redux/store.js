
import {configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth";
import editRoom from './slices/updateRoom'
import search from './slices/search'

export const store =configureStore({
    reducer:{
        authApi:authApi.reducer,
        editRoom: editRoom,
        search:search
    },
    middleware:(mid)=>mid().concat(authApi.middleware)
})
