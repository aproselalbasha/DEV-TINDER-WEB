import { createSlice } from "@reduxjs/toolkit";

const Feedslice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addfeed:(state,action)=>{
        return action.payload
        },
        removefeed:()=>{
            return null
        }
    }
})
export const {addfeed,removefeed}=Feedslice.actions
export default Feedslice.reducer