import React,{useState} from "react";
import "./index.css";

export default function App() {
  const [values,setValues]=useState({
    firstname:"",
    lastname:"",
    email:"",
})
const [submitted,setSubmitted]=useState(false)
const inputFirstname=(event)=>{
  setValues({...values,firstname:event.target.value})
}
const inputLastname=(event)=>{
  setValues({...values,lastname:event.target.value})
}
const inputEmail=(event)=>{
  setValues({...values,email:(event.target.value)})
}
const handleSubmit=(event)=>{
  event.preventDefault()
  setSubmitted(true)
}
  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        
        {submitted && values.firstname && values.lastname && values.email? <div className="success-message">Success! Thank you for registering</div>:null}
        <input
          id="first-name"
          value={values.firstname}
          onChange={inputFirstname}
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
       {submitted && !values.firstname?  <span>Please enter a first name</span>:null}
        
        <input
          id="last-name"
          value={values.lastname}
          onChange={inputLastname}
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastname?  <span>Please enter a first name</span> : null}

        <input
          id="email"
          value={values.email}
          onChange={inputEmail}
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
          {submitted && !values.email? <span>Please enter a first name</span>: null}
        
          <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
