import react from 'react'
import { LogoBox } from "../../components/logoBox/logoBox";
import { LoginBox } from "../../components/loginBox/loginBox";
import './TheLoginView.css'

const TheLoginView = () => {
  return (
    <div className="loginContainer">
      <div className="loginBox">
        <LoginBox />
      </div>
      <div className="logoBox">
        <LogoBox />
      </div>
    </div>
  );
}

export default TheLoginView