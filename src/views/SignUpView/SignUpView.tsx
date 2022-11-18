import react from 'react'
import { SignUpCompanyForm } from '../../components/SignUpCompanyForm/SignUpCompanyForm'
import { LogoBox } from '../../components/logoBox/logoBox'
import './SignUpView.css'

const SignUpView = () =>
{

  return (
    <div className="startContainer">
      <div className="startFormContainer">
        <SignUpCompanyForm />
      </div>
      <div className="logoBox">
        <LogoBox />
      </div>
    </div>
  )
}

export default SignUpView