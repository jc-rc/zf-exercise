import { createSlice } from "@reduxjs/toolkit";


//This represents the initalState, with its initial values
const initialState = {

    migrationMode: true,
    code: "ZF007",
    description: "The Main Organization",
    bankAccount: "ZF123456789",
    vatAccountNumber: "VATZF0000000",
    companyAccountNumber: "ZF123456BE",
    
    contactDetails: {
        emailAddress: "example@zerofriction.co",
        telephone: "0472772856",
        website: "www.zerofriction.co"
    },
    address: {
        streetName: "Konijnstraat",
        streetNumber: 55,
        postalCode: 9000,
        city: "Gent",
        country: "Belgium"
    }
}

//This are the "setters" for the "main" slice,
//They take the data sent from the inputs.

export const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers:{
        setOrganizationConfig : (state, action)=>{
            state.migrationMode = Boolean(action.payload.migrationMode)
            state.code = action.payload.code
            state.description = action.payload.description
            state.bankAccount = action.payload.bankAccount
            state.vatAccountNumber = action.payload.vatAccountNumber
            state.companyAccountNumber = action.payload.companyAccountNumber
            state.contactDetails.emailAddress = action.payload.emailAddress
            state.contactDetails.telephone = action.payload.telephone
            state.contactDetails.website = action.payload.website
            state.address.streetName = action.payload.streetName
            state.address.streetNumber = Number(action.payload.streetNumber)
            state.address.postalCode = Number(action.payload.postalCode)
            state.address.city = action.payload.city
            state.address.country = action.payload.country
        },
        
    }
})

export const {setOrganizationConfig} = mainSlice.actions

export default mainSlice.reducer