import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import History from './Pages/History/History'
import Dashboard from './Pages/Dashboard/Dashboard'
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
//import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>

);


