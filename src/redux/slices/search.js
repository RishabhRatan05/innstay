import { createSlice } from "@reduxjs/toolkit";


const search = new createSlice({
    name:'search',
    initialState:{value:''},

    reducers:{
        searchChange:(state,action)=>{
            state.value = action.payload.value
        }
    }
})

export const {searchChange} = search.actions
export default search.reducer
