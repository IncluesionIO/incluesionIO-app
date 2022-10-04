import React from "react";
import './loginBox.css'

const LoginBox = () => {

    const title = <h1 className="containerLoginBox-title-text">Log In</h1>

    return (
        <div className="containerLoginBox">
            <div className="containerLoginBox-title">
                {title}
            </div> 
        </div>
    )
}

export {LoginBox}