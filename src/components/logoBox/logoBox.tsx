import React from "react";
import './logoBox.css';
import whiteLogoWithText from '../../img/Incluesion_Logo/PNG/IncluesionLogo_secondary_white.png'

const LogoBox = () => {
    return (
        <div className="container">
            <img src={whiteLogoWithText} alt="logo" width={500} className="container-logoBoxIMG" />
        </div>
    )
};

export {LogoBox};