import { configureStore } from "@reduxjs/toolkit";
import userreducer from "../utils/userslice"
import feedreducer from "../utils/feedslice"

const appstore=configureStore({
    reducer:{
       user:userreducer,
       feed:feedreducer
    }
})
export default appstore