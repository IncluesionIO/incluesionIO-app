import React from "react";
import SimpleReactValidator from "simple-react-validator";
import "../SignUpCompanyForm.css";

const SignUpCompanyFormStep1 = ({
  inputValues,
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
          <li className="active signup-formBar-prgoressBar-1">
            <div>
              <p>1</p>
            </div>
          </li>
          <li className="signup-formBar-prgoressBar-2">
            <div>
              <p>2</p>
            </div>
          </li>
          <li className="signup-formBar-prgoressBar-3">
            <div>
              <p>3</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="signup-formCaption">
        <h1 className="addCompanyCaptionTop">First things first</h1>
        <h2 className="addCompanyCaptionBottom">Tell us about your company</h2>
      </div>
      <div className="signup-formInputs">
        <div className="signup-fromGroup">
          <label>
            <p className="signup-from-p">Company Name:</p>
            <input
              className="singup-form-input"
              type="text"
              id="singup-form-input-name"
              required
              value={inputValues.companyName}
              onChange={(e) =>
                setInputValues({ ...inputValues, companyName: e.target.value })
              }
            />
            {validator.message(
              "companyName",
              inputValues.companyName,
              "required",
              { className: "text-danger" }
            )}
          </label>
        </div>
        <div className="signup-fromGroup">
          <label>
            <p className="signup-from-p">
              Company email:{" "}
              <span className="support-context">
                (where we will be able to reach you)
              </span>
            </p>
            <input
              className="singup-form-input"
              type="email"
              id="singup-form-input-email"
              required
              value={inputValues.companyEmail}
              onChange={(e) =>
                setInputValues({ ...inputValues, companyEmail: e.target.value })
              }
            />
            {validator.message(
              "companyEmail",
              inputValues.companyEmail,
              "required|email",
              { className: "text-danger" }
            )}
          </label>
        </div>
        <div className="signup-fromGroup">
          <label>
            <p className="signup-from-p">
              Support email:{" "}
              <span className="support-context">
                (where your users will be able to reach you)
              </span>
            </p>
            <input
              className="singup-form-input"
              type="email"
              id="singup-form-input-supportemail"
              required
              value={inputValues.companySupportEmail}
              onChange={(e) =>
                setInputValues({
                  ...inputValues,
                  companySupportEmail: e.target.value,
                })
              }
            />
            {validator.message(
              "companySupportEmail",
              inputValues.companySupportEmail,
              "required|email",
              { className: "text-danger" }
            )}
          </label>
        </div>
        <div className="signup-fromGroup">
          <p className="signup-from-p">Organization Type:</p>
          <div className="signup-radioGroup">
            <label className="radio-card">
              <input
                className="singup-form-input-radio"
                type="radio"
                id="singup-form-input-email"
                name="orgType"
                required
                value={"Profit"}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    companyOrgType: e.target.value,
                  })
                }
              />
              <span>
                For - Profit
              </span>
            </label>
            <label className="radio-card">
              <input
                className="singup-form-input-radio"
                type="radio"
                id="singup-form-input-email"
                name="orgType"
                required
                value={"Non-profit"}
                onChange={(e) =>
                  setInputValues({
                    ...inputValues,
                    companyOrgType: e.target.value,
                  })
                }
              />
              <span>
                Non - Profit
              </span>
            </label>
          </div>
          {validator.message(
            "companyorganizationtype",
            inputValues.companyOrgType,
            "required",
            { className: "text-danger" }
          )}
        </div>
      </div>
    </div>
  );
};

export { SignUpCompanyFormStep1 };
