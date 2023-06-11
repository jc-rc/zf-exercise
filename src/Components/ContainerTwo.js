import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setTouched, setValid} from "../slices/uxSlice"

function ContainerTwo() {

    const data = useSelector(state=>state.main)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(setTouched(true))

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
        Contact Details
    </div>
    <div className="card-body">
        <div className="row text-start">
            <div className="col-12 mb-3">
                <label htmlFor="" className="form-label">Email Address</label>
                <input 
                type="email"
                name='emailAddress'
                className="form-control"
                required
                onChange={ handleChange}
                defaultValue={data.contactDetails.emailAddress}
                />
            </div>
            <div className="col-12 mb-3">
                {/* Validate: only numbers, max 11 chars */}
                <label htmlFor="" className="form-label">Telephone</label>
                <input 
                type="text"
                name='telephone'
                className="form-control"
                pattern='[0-9]*'
                maxLength={11}
                required
                onChange={handleChange}
                defaultValue={data.contactDetails.telephone}
                />
                 <div className="invalid-feedback">
                    Telephone number not validated 👀
                 </div>
                 
             </div>
            <div className="col-12 mb-3">
                <label htmlFor="" className="form-label">Website</label>
                <input 
                type="text"
                name='website'
                className="form-control" 
                required
                onChange={ handleChange}
                defaultValue={data.contactDetails.website}
                />
            </div>
           
        </div>
    </div>

</div>
  )
}

export default ContainerTwo