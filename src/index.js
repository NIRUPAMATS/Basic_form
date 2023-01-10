import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import History from './Pages/History/History'
import Dashboard from './Pages/Dashboard/Dashboard'
import App from './App';
=======
import Status from './Pages/Status/Status';
>>>>>>> 6745f0305bd32abfdb29bbf25ed7a8a9ba682fbc
import { BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Review from './Pages/Review/Review';
//import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
<<<<<<< HEAD
    <Dashboard />
    {/* <History /> */}
=======
<<<<<<< HEAD
    <Status/>
=======
    <Review />
>>>>>>> refs/remotes/origin/main
>>>>>>> 6745f0305bd32abfdb29bbf25ed7a8a9ba682fbc
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
