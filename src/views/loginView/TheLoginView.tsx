import react from 'react'
import { LogoBox } from "../../components/logoBox/logoBox";
import { LoginBox } from "../../components/loginBox/loginBox";

const TheLoginView = () => {
  return (
    <div className="App">
      <div className="App-loginBox">
        <LoginBox />
      </div>
      <div className="App-logoBox">
        <LogoBox />
      </div>
    </div>
  );
}

export default TheLoginView