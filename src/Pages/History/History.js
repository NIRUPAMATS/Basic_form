import './History.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const data = [
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male"},
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
// { name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
{ name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
{ name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
{ name: "Anom", date: 19, category: "Male", type: "Male", status: "Male" },
]

function History() {
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
        {data.map((val, key) => {
        return (
          <tr key={key}>
          <td>{val.name}</td>
          <td>{val.date}</td>
          <td>{val.category}</td>
          <td>{val.type}</td>
          <td>{val.status}</td>
          </tr>
        )
        })}
        </table>
      </div>
      <Footer/>
    </div>
  );
}

export default History;