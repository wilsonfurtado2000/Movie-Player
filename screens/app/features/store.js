import {confiregureStore} from "@reduxjs/toolkit"
import  useReducer from "../features/userSlice"
export default confiregureStore({
    reducer:{
        user:useReducer,
    },
});