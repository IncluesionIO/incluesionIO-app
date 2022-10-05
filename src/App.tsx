import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { LogoBox } from "./components/logoBox/logoBox";
import { LoginBox } from "./components/loginBox/loginBox";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <div className="App-logoBox">
        <LogoBox />
      </div>
      <div className="App-loginBox">
        <LoginBox />
      </div>
    </div>
  );
}

export default App;
