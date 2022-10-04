import React from "react";
import './logoBox.css';
import whiteLogoWithText from '../../img/Incluesion_Logo/PNG/IncluesionLogo_secondary_white.png'

const LogoBox = () => {
    return (
        <div className="containerLogoBox">
            <img src={whiteLogoWithText} alt="logo" width={700} className="containerLogoBox-IMG" />
        </div>
    )
};

export {LogoBox};