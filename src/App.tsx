import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TheLoginView from "./views/loginView/TheLoginView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TheLoginView />} />
      </Routes>
    </Router>
  );
}
export default App;
