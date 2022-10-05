import React from "react";
import { Link } from 'react-router-dom'
import './loginBox.css'

const LoginBox = () => {

    const handleSubmit = (event: { preventDefault: () => void; }) =>
    {
        event.preventDefault()
    }

    const title = <h1 className="containerLoginBox-title-text">Log In</h1>

    const emailError = '';
    const passwordError = ''

    return (
        <div className="containerLoginBox">
            <div className="containerLoginBox-title">
                {title}
            </div>
            <form onSubmit={handleSubmit} className={'formLogin'}>
                <div>
                    <input className={'userInput'} type={'text'} id='userIdentification' required></input>
                    <label htmlFor="userIdentification" className="inputLabel">Email or Username</label>
                    <span className="error-message" aria-live="polite">{emailError}</span>
                </div>
                <div>
                    <input className={'userInput'} type={'password'} id='userPassword' required></input>
                    <label htmlFor="userPassword" className="inputLabel" aria-label="Password">Password</label>
                    <span className="error-message" aria-live="polite">{passwordError}</span>
                </div>
                <div className="formSettings">
                    <input type={'checkbox'} id='userSignInPreference'></input>
                    <label htmlFor="userSignInPreference">Keep me signed in</label>
                    <Link to='/forgot-password'>Forgot password?</Link>
                </div>
                <div>
                    <button className={'btnLogin'} type="submit">Log In</button>
                </div>
            </form>
        </div>
    )
}

export {LoginBox}