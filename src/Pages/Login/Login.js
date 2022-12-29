import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Login.css';

export default function Login() {
  const [values,setValues]=useState({
    email:"",
    password:"",
})
const [submitted,setSubmitted]=useState(false)

const inputEmail=(event)=>{
  setValues({...values,email:(event.target.value)})
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
        
        {submitted &&  values.email && values.password ? <div className="success-message">Welcome Back!!</div>:null}
        <h2 className="head" >Log In</h2>
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
        
          <Link to="/signup" className="form-field">
          <button class="form-field" type="button">
          Log In
          </button>
          </Link>
          
      </form>
    </div>
    </div>
  );
}
