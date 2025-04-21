import { createSlice } from "@reduxjs/toolkit";

const connectionslice=createSlice({
    name:"connections",
    initialState:null,
    reducers:{
        addconnection:(state,action)=>{
      return action.payload
        }
    }
})
export const{addconnection}=connectionslice.actions;
export default connectionslice.reducer