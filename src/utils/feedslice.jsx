import { createSlice } from "@reduxjs/toolkit";

const Feedslice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addfeed:(state,action)=>{
        return action.payload
        },
        removeUserFromFeed:(state,action)=>{
        const newfeed=state.filter((r)=>r._id !== action.payload)
            return newfeed
        }
    }
})
export const {addfeed,removeUserFromFeed}=Feedslice.actions
export default Feedslice.reducer