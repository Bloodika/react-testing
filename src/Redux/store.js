import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {catSlice} from "./reducer";

export default configureStore({
    reducer: {cat: catSlice.reducer},
    middleware: [thunk]
})
