import './Dashboard.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button';

const data = [
{ slno: "Anom", email: 19, category: "Male", type: "Male", quantity: "Male", date: "Male"},
{ slno: "Anom", email: 19, category: "Male", type: "Male", quantity: "Male", date: "Male"},
]

function Dashboard() {
  return (
    <div className="App">
      <Navbar/>
      <p className="textColour">Your current booking details</p>
      <div className="tableClass">
        <table>
        <tr>
        <th>SL No</th>
        <th>Email</th>
        <th>Category</th>
        <th>Type</th>
        <th>Quantity</th>
        <th>Date</th>
        <th>Status</th>
        </tr>
        {data.map((val, key) => {
        return (
          <tr key={key}>
          <td>{val.slno}</td>
          <td>{val.email}</td>
          <td>{val.category}</td>
          <td>{val.type}</td>
          <td>{val.quantity}</td>
          <td>{val.date}</td>
          <td>
            { 
            <div>
              <button className="button1" variant="contained">Cancel</button>
              <button className="button2" variant="contained">Vacate</button>
            </div>
           }
           </td>
          </tr>
        )
        })}
        </table>
      </div>
      <Footer/>
    </div>
  );
}

export default Dashboard;