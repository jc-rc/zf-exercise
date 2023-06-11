import { configureStore } from "@reduxjs/toolkit";
import uxSlice from "../slices/uxSlice";
import mainSlice from "../slices/mainSlice";

//The store is configured with a couple of Slices / Reducers
// My solution considers a slice of the state that act as an auxiliary state for the UX (form validation, etc..)
// and another slice for the main data that is being handled.

export const store = configureStore({
    reducer:{
        ux: uxSlice,
        main: mainSlice
    }
})