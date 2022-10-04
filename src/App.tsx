import React from 'react';
import './App.css';
import {LogoBox} from './components/logoBox/logoBox'
import {LoginBox} from './components/loginBox/loginBox'

function App() {
  return (
    <div className="App">
      <div className='App-logoBox'>
        <LogoBox />
      </div>
      <div className='App-loginBox'>
        <LoginBox />
      </div>
    </div>
  );
}

export default App;
