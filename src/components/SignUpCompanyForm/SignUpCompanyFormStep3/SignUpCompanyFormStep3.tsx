import React from "react";
import SimpleReactValidator from "simple-react-validator";
import '../SignUpCompanyForm.css'

const SignUpCompanyFormStep3 = ({inputValues,
    setInputValues,
    validator,
  }: {
    inputValues: any;
    setInputValues: any;
    validator: SimpleReactValidator;
  }) => {
    return (
      <div className="signup-formStepContainer">
        <div className="signup-formBar">
          <ul>
            <li className="passed signup-formBar-prgoressBar-1">
              <div>
                <p>1</p>
              </div>
            </li>
            <li className="passed signup-formBar-prgoressBar-2">
              <div>
                <p>2</p>
              </div>
            </li>
            <li className="active signup-formBar-prgoressBar-3">
              <div>
                <p>3</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="signup-formCaption">
          <h1 className="addCompanyCaptionTop">
            Let's create the admin account!
          </h1>
          <h2 className="addCompanyCaptionBottom">
            Fill out the following fields
          </h2>
        </div>
        <div className="signup-formInputs">
          <div className="signup-fromGroup">
            <label>
              <p className="signup-from-p">Your Name:</p>
              <input
                className="singup-form-input"
                type="text"
                id="singup-form-input-name"
                required
                value={inputValues.adminName}
                onChange={(e) =>
                  setInputValues({ ...inputValues, adminName: e.target.value })
                }
              />
              {validator.message("name", inputValues.adminName, "required", {
                className: "text-danger",
              })}
            </label>
          </div>
          <div className="signup-fromGroup">
            <label>
              <p className="signup-from-p">Username:</p>
              <input
                className="singup-form-input"
                type="email"
                id="singup-form-input-email"
                required
                value={inputValues.adminUsername}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    adminUsername: e.target.value,
                  })
                }
              />
              {validator.message(
                "username",
                inputValues.adminUsername,
                "required",
                { className: "text-danger" }
              )}
            </label>
          </div>
          <div className="signup-fromGroup">
            <label>
              <p className="signup-from-p">Email</p>
              <input
                className="singup-form-input"
                type="email"
                id="singup-form-input-supportemail"
                required
                value={inputValues.adminEmail}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    adminEmail: e.target.value,
                  })
                }
              />
              {validator.message(
                "email",
                inputValues.adminEmail,
                "required|email",
                { className: "text-danger" }
              )}
            </label>
          </div>
        </div>
      </div>
    )
}

export {SignUpCompanyFormStep3}