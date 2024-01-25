import React from 'react';
import logo from '../assets/Holberton_logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>
          School dashboard
        </h1>
      </div>
      {/* Body */}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      {/* Footer */}
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;