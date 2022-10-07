import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TheForgotPasswordView from "./views/forgotPasswordView/TheForgotPasswordView";
import TheLoginView from "./views/loginView/TheLoginView";
import TheResetPasswordView from "./views/resetPasswordView/TheResetPasswordView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reset/:token" element={<TheResetPasswordView />} />
        <Route path="/forgot-password" element={<TheForgotPasswordView />} />
        <Route path="/" element={<TheLoginView />} />
      </Routes>
    </Router>
  );
}
export default App;
