import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
export default function App() {
  
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup"  exact element={<Signup/>}/>
      </Routes>
    
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