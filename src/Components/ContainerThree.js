import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setTouched, setValid} from "../slices/uxSlice"

function ContainerThree() {

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
        Adress Details
    </div>
    <div className="card-body">
        <div className="row text-start">
            <div className="col-12 mb-3">
                <label htmlFor="" className="form-label">Street Name</label>
                <input 
                type="text"
                name='streetName'
                className="form-control"
                required
                onChange={ handleChange}
                defaultValue= {data.address.streetName}
                />
                </div>
            <div className="col-12 mb-3">
                <label htmlFor="" className="form-label">Street Number</label>
                <input 
                type="number"
                name='streetNumber'
                className="form-control"
                required
                onChange={ handleChange}
                defaultValue= {data.address.streetNumber}
                />
                </div>
            <div className="col-12 mb-3">
                <label htmlFor="" className="form-label">Postal Code</label>
                <input 
                type="number"
                name='postalCode'
                className="form-control"
                required
                onChange={ handleChange}
                defaultValue= {data.address.postalCode}
                />
                </div>
            <div className="col-12 mb-3">
                <label htmlFor="" className="form-label">City</label>
                <input 
                type="text"
                name='city'
                className="form-control"
                required
                onChange={ handleChange}
                defaultValue= {data.address.city}
                />
                </div>
            <div className="col-12 mb-3">
                <label htmlFor="" className="form-label">Country</label>
                <input 
                type="text"
                name='country'
                className="form-control"
                required
                onChange={ handleChange}
                defaultValue= {data.address.country}
                />
                </div>
            
        </div>
    </div>

</div>
  )
}

export default ContainerThree