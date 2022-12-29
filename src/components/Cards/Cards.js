import React from "react";
import './Cards.css'

function Cards(){
    return(
      
        <div className="recommendations">
        <div className="heading">
          <span>Our Rooms</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="image">
              <img src="../../../Images/delux-room.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          
        </div>
      </div>
    );
}

export default Cards