import { createSlice } from "@reduxjs/toolkit";

const Requestslice=createSlice({
    name:"request",
    initialState:null,
    reducers:{
        addrequest:(state,action)=>{
            return action.payload

        }
    }
})
export const{addrequest}=Requestslice.actions
export default Requestslice.reducer