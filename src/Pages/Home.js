import React from "react";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cards from "../components/Cards/Cards";

function Home(){
    return(
        <div>
           < Navbar/>
           <Cards/>
           < Footer/>
        </div>
    );
}
export default Home