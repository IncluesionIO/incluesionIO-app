import React from "react";
import SimpleReactValidator from "simple-react-validator";
import "../SignUpCompanyForm.css";

const SignUpCompanyFormStep2 = ({
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
          <li className="passed signup-formBar-prgoressBar-1">
            <div>
              <p>1</p>
            </div>
          </li>
          <li className="active signup-formBar-prgoressBar-2">
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
        <h1 className="addCompanyCaptionTop">
          Tell us about your company!
        </h1>
        <h2 className="addCompanyCaptionBottom">
          What best describes your company?
        </h2>
      </div>
      <div className="signup-formInputs">
        <div className="signup-fromGroup">
          <label>
            <p className="signup-from-p">What is your industry?</p>
            <input
              className="singup-form-input"
              type="text"
              id="singup-form-input-industry"
              required
              value={inputValues.companyIndustry}
              onChange={(e) =>
                setInputValues({ ...inputValues, companyIndustry: e.target.value })
              }
            />
            {validator.message("industry", inputValues.companyIndustry, "required", {
              className: "text-danger",
            })}
          </label>
        </div>
      </div>
    </div>
  );
};

export { SignUpCompanyFormStep2 };
