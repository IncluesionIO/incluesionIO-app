import react from 'react'
import { LogoBox } from "../../components/logoBox/logoBox";
import { ForgotPasswordBox } from '../../components/forgotPasswordBox/forgotPasswordBox';
import './TheForgotPasswordView.css'

const TheForgotPasswordView = () => {
  return (
    <div className="loginContainer">
      <div className="logoBox">
        <LogoBox />
      </div>
      <div className="fpBox">
        <ForgotPasswordBox />
      </div>
    </div>
  );
}

export default TheForgotPasswordView