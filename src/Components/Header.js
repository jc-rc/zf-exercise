import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTouched, setValid } from "../slices/uxSlice"


function Header() {

  //
 
  //Selectors and dispatch allow me to "get" & "set" the desired slice of the state.
  const isValid = useSelector((state) => state.ux.isFormValid)
  const isTouched = useSelector((state) => state.ux.isFormTouched)
  const dispatch = useDispatch()

   //When "CANCEL" is pressed
   const handleFormReset = (e) => {
    // It's considered a form reset.
    // The form inputs reset to their "defaultValue" values, (in this case, values from the main slice.)
    document.querySelector("#mainForm").reset()

    //Also the inputs are marked as "not touched"
    dispatch(setTouched(false))

    //And then validity is checked
     const inputs = document.querySelectorAll("input")
     if(Array.from(inputs).find(ipt=> ipt.validity.valid === false) === undefined){
         dispatch(setValid(true))
     } else{
         dispatch(setValid(false))
     }
  }

  return (
    <div className="row d-flex align-items-center bg-body-tertiary p-4">
      <div className="col-12 mb-4 text-start d-flex align-items-center justify-content-between">
        <p className="h3 m-0">Technical Assessment</p>
        <p className='m-0 text-end'>Juan Carlos Rodríguez</p>

      </div>
      <div className=" col-sm-7">
        <div className="alert alert-primary">
          {/* Some "flags" that indicate the current UX slice values */}
          <p className="small m-0">Form Touched? <span className={`badge ${isTouched ? "text-bg-success" : "text-bg-danger"}`}>{`${isTouched}`}</span>
          </p>
          <p className="small m-0">Form Valid? <span className={`badge ${isValid ? "text-bg-success" : "text-bg-danger"}`}>{`${isValid}`}</span>
          </p>


        </div>
      </div>

      <div className="col text-end">
        {/* Logic for the buttons as per the Acceptance Criteria, points 1, 2, 3, 5 */}


        {/* The CANCEL button; its rendering depends on the isTouched value; as per the Acceptance Criteria, point 5.
            The button is of type {reset} so that it can revert the input values to their defaultValues, as per point 4
          */}
        {isTouched && <button
          onClick={handleFormReset}
          className="btn btn-outline-danger me-3"
        >Cancel
        </button>}


        {/* The SAVE button; its disabled property is conditioned by both the isValid and isTouched values as per point 1, 2, 3 
          */}
        <button
          type='submit'
          className="btn btn-primary"
          disabled={!isValid || !isTouched}>Save
        </button>
      </div>
    </div>
  )
}

export default Header