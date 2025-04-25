import { createSlice } from "@reduxjs/toolkit";

const Requestslice=createSlice({
    name:"request",
    initialState:null,
    reducers:{
        addrequest:(state,action)=>{
            return action.payload

        },
        removerequest:(state,action)=>{
            console.log(state)
            const newarry= state.filter((r)=>r._id!==action.payload)
            return newarry

        }
    }
})
export const{addrequest,removerequest}=Requestslice.actions
export default Requestslice.reducer