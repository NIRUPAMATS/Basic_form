import './History.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import postrequest from "../../Backend/postrequest";
import { async } from 'q';


const History=()=> {
    const [data,setdata] = useState([])
    useEffect(()=>{
        console.log("hy")
       getdata()
    },[])


    const getdata=async()=>{
        const values={userid:2}
        const{retdata:retdata}=await postrequest(`${window.name}bookroom`,values);
        console.log(retdata)
        setdata(retdata)
    }
  return (
    <div className="App">
      <Navbar/>
      <p className="textColour">Your booking is placed !</p>
      <div className="tableClass">
        <table>
        <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Category</th>
        <th>Type</th>
        <th>Status</th>
        </tr>
        {/* {data && data.map((val, key) => {
        return (
          <tr key={key}>
          <td>{val.name}</td>
          <td>{val.date}</td>
          <td>{val.category}</td>
          <td>{val.type}</td>
          <td>{val.status}</td>
          </tr>
        )
        })} */}
        </table>
      </div>
      <Footer/>
    </div>
  );
}

export default History;