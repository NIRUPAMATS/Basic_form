import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Signup.css';

export default function Signup() {
  const [values,setValues]=useState({
    username:"",
    phoneNumber:"",
    email:"",
    password:"",
})
const [submitted,setSubmitted]=useState(false)

const inputUsername=(event)=>{
  setValues({...values,username:(event.target.value)})
}
const inputEmail=(event)=>{
  setValues({...values,email:(event.target.value)})
}
const inpuPhoneNumber=(event)=>{
  setValues({...values,phoneNumber:(event.target.value)})
}
const inputPassword=(event)=>{
    setValues({...values,password:(event.target.value)})
  }
const handleSubmit=(event)=>{
  event.preventDefault()
  setSubmitted(true)
}
  return (
    <div className="body">
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        
        {submitted && values.username && values.email && values.password ? <div className="success-message">Success! Thank you for signing up!</div>:null}
        <h2 className="head" >Sign Up</h2>
        <input
          id="username"
          value={values.username}
          onChange={inputUsername}
          class="form-field"
          type="text"
          placeholder="Username"
          name="username"
        />
          {submitted && !values.username? <span>Please enter username</span>: null}
          
        <input
          id="phoneNumber"
          value={values.phoneNumber}
          onChange={inpuPhoneNumber}
          class="form-field"
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
        />
          {submitted && !values.phoneNumber? <span>Please enter phone number</span>: null}
          
          <input
          id="email"
          value={values.email}
          onChange={inputEmail}
          class="form-field"
          type="email"
          placeholder="Email"
          name="email"
        />
          {submitted && !values.email? <span>Please enter email</span>: null}
          
          <input
          id="password"
          value={values.password}
          onChange={inputPassword}
          class="form-field"
          type="password"
          placeholder="Password"
          name="password"
        />
          {submitted && !values.password? <span>Please enter password</span>: null}
        
          <Link to="/home">
          <button class="form-field" type="submit">
          Sign Up
        </button>
          </Link>
      </form>
    </div>
    </div>
  );
}
