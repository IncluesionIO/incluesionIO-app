import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AdminAppView from "./components/adminApp/adminAppView";
import TheForgotPasswordView from "./views/forgotPasswordView/TheForgotPasswordView";
import TheLoginView from "./views/loginView/TheLoginView";
import TheResetPasswordView from "./views/resetPasswordView/TheResetPasswordView";
import SignUpView from "./views/SignUpView/SignUpView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reset/:token" element={<TheResetPasswordView />} />
        <Route path="/forgot-password" element={<TheForgotPasswordView />} />
        <Route path="/" element={<TheLoginView />} />
        <Route path="/start" element={<SignUpView />} />
        <Route path="/admin/*" element={<AdminAppView />} />
      </Routes>
    </Router>
  );
}
export default App;
