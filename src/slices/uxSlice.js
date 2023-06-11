import { createSlice } from "@reduxjs/toolkit";

//This represents the initalState, with its initial values
const initialState = {
    isFormTouched: false,
    isFormValid: true
}


//This are the "setters" for the "ux" slice,

export const uxSlice = createSlice({
    name: "ux",
    initialState,
    reducers:{
        setTouched: (state, action)=>{
            state.isFormTouched = action.payload
        },

        setValid: (state, action)=>{
            state.isFormValid = action.payload
        },
    }
})

export const {setTouched, setValid} = uxSlice.actions

export default uxSlice.reducer