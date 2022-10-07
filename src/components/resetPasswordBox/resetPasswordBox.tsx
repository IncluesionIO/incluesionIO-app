import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./resetPasswordBox.css";

const ResetPasswordBox = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [newPasswordConfirmError, setNewPasswordConfirmError] = useState("");
  const [successAlert, setSuccessAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const params = useParams()

  useEffect(() =>
  {
    setNewPasswordError("")
  }, [newPassword])

  useEffect(() =>
  {
    setNewPasswordConfirmError("")
  }, [newPasswordConfirm])

  const formValidator = () => {
    let error = false
    if(newPasswordConfirm !== newPassword)
    {
        setNewPasswordError("Password do not match")
        setNewPasswordConfirmError("Password do not match")
        error = true
    }
    if(newPassword.trim().length < 1)
    {
        setNewPasswordError("Fields cannot be empty!")
        error = true
    }
    if(newPasswordConfirm.trim().length < 1)
    {
        setNewPasswordConfirmError("Fields cannot be empty!")
        error = true
    }
    return error
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    setErrorAlert("")
    event.preventDefault();
    if(!formValidator())
    {
        axios.put("http://localhost:13000/auth/reset", 
        {
          resetToken: params.token,
          newPassword
        }).then((response) => {
          const responseData = response.data;
          setSuccessAlert("Password successfuly reset!")
          console.log(responseData)
        })
        .catch(err =>
            {
                console.log(err)
                const status = err.response.status
                if(status === 404 || status === 422 || status === 500)
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
            type={"password"}
            id="newPassword"
            placeholder=" "
            onChange={(e) => {setNewPassword(e.target.value)}}
          ></input>
          <label htmlFor="newPassword" className="inputLabel">
            New Password
          </label>
          <span className="error-message" aria-live="polite">
            {newPasswordError}
          </span>
        </div>
        <div>
          <input
            className={"userInput"}
            type={"password"}
            id="newPasswordConfirm"
            placeholder=" "
            onChange={(e) => {setNewPasswordConfirm(e.target.value)}}
          ></input>
          <label htmlFor="newPasswordConfirm" className="inputLabel">
            Confirm New Password
          </label>
          <span className="error-message" aria-live="polite">
            {newPasswordConfirmError}
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

export { ResetPasswordBox };
