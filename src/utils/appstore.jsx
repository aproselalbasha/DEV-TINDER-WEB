import { configureStore } from "@reduxjs/toolkit";
import userreducer from "../utils/userslice"
import feedreducer from "../utils/feedslice"
import connectionreducer from "./connectionslice"
import requestreducer from "./requestslice"

const appstore=configureStore({
    reducer:{
       user:userreducer,
       feed:feedreducer,
       connections:connectionreducer,
       request:requestreducer
    }
})
export default appstore