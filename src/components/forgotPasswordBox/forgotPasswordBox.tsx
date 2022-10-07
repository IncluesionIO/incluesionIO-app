import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./forgotPasswordBox.css";

const ForgotPasswordBox = () => {
  const [identifier, setIdentifier] = useState("");
  const [identifierError, setIdentifierError] = useState("");
  const [successAlert, setSuccessAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

  useEffect(() =>
  {
    setIdentifierError("")
  }, [identifier])

  const formValidator = () => {
    let error = false
    if(identifier.trim().length < 1)
    {
        setIdentifierError("Fields cannot be empty!")
        error = true
    }
    return error
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    setErrorAlert("")
    event.preventDefault();
    if(!formValidator())
    {
        axios.post("http://localhost:13000/auth/reset", 
        {
            input:identifier
        }).then((response) => {
          const responseData = response.data;
          setSuccessAlert("An email has been sent to the account")
          console.log(responseData)
        })
        .catch(err =>
            {
                const status = err.response.status
                if(status === 422 || status === 500)
                {
                    setErrorAlert("There was a problem requesting your password reset, please try again.")
                }
            });
    }
  };

  const title = <h1 className="containerLoginBox-title-text">Reset Password</h1>;



  return (
    <div className="containerFPBox">
      <div className="containerFPBox-title">{title}</div>
      <span id="errorAlert" className="errorAlert">{errorAlert}</span>
      <span id="successAlert" className="successAlert">{successAlert}</span>
      <form onSubmit={handleSubmit} className={"formLogin"}>
        <div>
          <input
            className={"userInput"}
            type={"text"}
            id="userIdentification"
            placeholder=" "
            onChange={(e) => {setIdentifier(e.target.value)}}
          ></input>
          <label htmlFor="userIdentification" className="inputLabel">
            Username or email
          </label>
          <span className="error-message" aria-live="polite">
            {identifierError}
          </span>
        </div>
        <div>
          <Link to={"/"}>Back to Login</Link>
        </div>
        <div>
          <button className={"btnLogin"} type="submit">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export { ForgotPasswordBox };
