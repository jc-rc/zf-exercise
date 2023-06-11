import './App.css';
import Header from './Components/Header';
import ContainerOne from './Components/ContainerOne';
import ContainerTwo from './Components/ContainerTwo';
import ContainerThree from './Components/ContainerThree';

import { useDispatch, useSelector } from "react-redux"
import { setTouched, setValid } from "./slices/uxSlice"
import { setOrganizationConfig } from './slices/mainSlice';
import { useEffect } from 'react';

function App() {

  //Selectors and dispatch allow me to "get" & "set" the desired slice of the state.
  const isTouched = useSelector((state) => state.ux.isFormTouched)
  const dispatch = useDispatch()


  // An auxiliary effect that checks the validity property of every input; and if at least one is invalid; the "whole form validity" is considered {false}
  // This is performed in case the initialState had errors from the start.
  useEffect(() => {
    const inputs = document.querySelectorAll("input")
    if(Array.from(inputs).find(ipt=> ipt.validity.valid === false) === undefined){
        dispatch(setValid(true))
    } else{
        dispatch(setValid(false))
    }

  }, [dispatch])


  // When "SAVE" is pressed...
  const handleFormSubmit = (e) => {

    e.preventDefault()
    //The data from the inputs is gathered into FormData
    const formData = new FormData(e.target)

    //Because of the nature of checkboxes, I figured that, since a "turned off" checkbox doesn't return a value of {false}, and instead it just won't return the key/value pair at all...
    // If FormData doesn't have a "migrationMode" key/value pair; it means that the checkbox isn't checked, therefore, the value expected is {false}. An so it gets appended with "" (blank) -a "falsey" value-.
    // The "falseyness" is to be use for a String to Boolean conversion on the mainSlice file.
    if (!formData.has("migrationMode")) {
      formData.append("migrationMode", "")
    }

    //The FormData is turned to JSON...
    const formJson = Object.fromEntries(formData.entries())

    //and sent to update the main slice
    dispatch(setOrganizationConfig(formJson))

    //Sets fields as not Touched
    dispatch(setTouched(false))
  }


 


  return (

    <div className="App">


      {/* Since I'm styling my form (and the other components) with Bootstrap, I'm making use of their <needs-validation> and <was-validated> classes,
        they work by overriding the native browser styles for validation; so the <noValidate> property is enabled.

        The class <was-validated> is the one that actually checks and applies the styles to valid/invalid inputs; so I condition it to the "isTouched" state.
        (per the Acceptance Criteria points 6 & 10)
      */}
      <form id='mainForm'
        action=""
        onSubmit={handleFormSubmit}
        className={`needs-validation ${isTouched && "was-validated"}`}
        noValidate
      >

        <header className='mb-4'>
          <Header />
        </header>


        <section className='px-4 row' >
          <div className="col-sm-4 mb-5 d-flex">
            <ContainerOne />
          </div>

          <div className="col-sm-4 mb-5 d-flex">
            <ContainerTwo />
          </div>

          <div className="col-sm-4 mb-5 d-flex">
            <ContainerThree />
          </div>
        </section>

      </form>

    

    </div>
  );
}

export default App;
