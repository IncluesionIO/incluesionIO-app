import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LogoBox} from './components/logoBox/logoBox'

function App() {
  return (
    <div className="App">
      <div className='App-logoBox'>
        <LogoBox />
      </div>
      <div className='App-loginBox'>
        <h1>Input Side</h1>
      </div>
    </div>
  );
}

export default App;
