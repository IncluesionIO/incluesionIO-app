import react from 'react'
import { LogoBox } from "../../components/logoBox/logoBox";
import { ResetPasswordBox } from '../../components/resetPasswordBox/resetPasswordBox';
import './TheResetPasswordView.css'

const TheResetPasswordView = () => {
  return (
    <div className="loginContainer">
      <div className="logoBox">
        <LogoBox />
      </div>
      <div className="fpBox">
        <ResetPasswordBox />
      </div>
    </div>
  );
}

export default TheResetPasswordView