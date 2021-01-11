import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { Link } from 'react-router-dom';
function App() {

  return (

    <div>
      <Router>
        <Routes />
      </Router>

    </div>
  );
}

export default App;
