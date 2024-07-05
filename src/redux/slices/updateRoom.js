import { createSlice } from "@reduxjs/toolkit";

const roomSlice = new createSlice({
  name: "editRoom",
  initialState: {
    title: "",
    desc:"",
    food:"",
    wifi:false,
    shower:false,
    location:false,
    price:"",
    url:"",
    _id:""
  },
  reducers: {
    valueChange: (state, action) => {
      state.title = action.payload.title
      state.desc = action.payload.desc
      state.food = action.payload.food
      state.wifi = action.payload.wifi
      state.shower = action.payload.shower
      state.location = action.payload.location
      state.price = action.payload.price
      state.url = action.payload.url
      state._id = action.payload._id
    },
  },
})
export const {valueChange} = roomSlice.actions
export default roomSlice.reducer