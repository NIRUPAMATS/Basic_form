import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import './App.css';
export default function App() {
  
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/signup"  exact element={<Signup/>}/> 
         <Route path="/home"  exact element={<Home/>}/> 
      </Routes>
    </div>
    
    
  );
}


// <div >
    //   <Router>

    //     <ul>
    //     <li>
    //             <Link to="/">Home</Link>
    //           </li>
    //     </ul>

    //     <Routes>
    //     <Route exact path='/' element={< Login />}></Route>
    //     </Routes>
    //   </Router>
    // </div>