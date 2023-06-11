import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTouched, setValid } from "../slices/uxSlice"


function ContainerOne() {
    //Uses a Selector to get the main State initial values.
    //Selectors and dispatch allow me to "get" & "set" the desired slice of the state.
    const data = useSelector(state => state.main)
    const dispatch = useDispatch()


    //The general function that all inputs share (even through Containers 1_2, 1_3)
    const handleChange = (e) => {
        //When any input is changed/ touched the isTouched state is changed
        dispatch(setTouched(true))
         
        // An auxiliary function that checks the validity property of every input; and if at least one is invalid; the "whole form validity" is considered {false}
        //For efficiency, if the input that calls this function (handleChange) is invalid, it won't cycle through the others and set the value of isValid to {false} right away
        if (!e.target.validity.valid) {
            dispatch(setValid(false))
        } else {
            const inputs = document.querySelectorAll("input")
            if(Array.from(inputs).find(ipt=> ipt.validity.valid === false) === undefined){
                dispatch(setValid(true))
            } else{
                dispatch(setValid(false))
            }
        }
    }

    return (
        <div className='card'>
            <div className="card-header h5">
                Organization Details
            </div>
            <div className="card-body">
                <div className="row text-start">
                    <div className="col-12 mb-3">
                        <label htmlFor="" className="form-label">Migration Mode</label>
                        <div className="form-check form-switch">
                            
                            {/* Every input:
                                - has an onChange event listener that triggers the same function.
                                - has a [defaultValue], (or [defaultChecked]) directly from the main slice state.
                                - has a [name] attribute that will help build the FormData

                             */}
                            <input
                                type="checkbox"
                                name='migrationMode'
                                className="form-check-input"
                                onChange={handleChange}
                                defaultChecked={data.migrationMode}
                            />
                            <label htmlFor="" className="form-check-label">Enabled</label>
                        </div>
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="" className="form-label">Code</label>
                        <input
                            type="text"
                            name='code'
                            className="form-control"
                            required
                            onChange={handleChange}
                            defaultValue={data.code}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="" className="form-label">Description</label>
                        <input
                            type="text"
                            name='description'
                            className="form-control"
                            required
                            onChange={handleChange}
                            defaultValue={data.description}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="" className="form-label">Bank Account</label>
                        <input
                            type="text"
                            name='bankAccount'
                            className="form-control"
                            required
                            onChange={handleChange}
                            defaultValue={data.bankAccount}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="" className="form-label">VAT Account Number</label>
                        <input
                            type="text"
                            name='vatAccountNumber'
                            className="form-control"
                            required
                            onChange={handleChange}
                            defaultValue={data.vatAccountNumber}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="" className="form-label">Company Account Number</label>
                        <input
                            type="text"
                            name='companyAccountNumber'
                            className="form-control"
                            required
                            onChange={handleChange}
                            defaultValue={data.companyAccountNumber}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContainerOne