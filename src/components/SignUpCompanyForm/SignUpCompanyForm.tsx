import React, { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import "./SignUpCompanyForm.css";
import { SignUpCompanyFormStep1 } from "./SignUpCompanyFormStep1/SignUpCompanyFormStep1";
import { SignUpCompanyFormStep2 } from "./SignUpCompanyFormStep2/SignUpCompanyFormStep2";
import { SignUpCompanyFormStep3 } from "./SignUpCompanyFormStep3/SignUpCompanyFormStep3";

const SignUpCompanyForm = () => {
  //Keep page record
  const [page, setPage] = useState(0);
  //Each steps values
  const [step1Values, setStep1Values] = useState({});
  const [step2Values, setStep2Values] = useState({});
  const [step3Values, setStep3Values] = useState({});
  //To allow forced updates
  const [value, setValue] = useState(0);

  //Create a validator for each step
  const step1Validator = useRef(new SimpleReactValidator())
  const step2Validator = useRef(new SimpleReactValidator())
  const step3Validator = useRef(new SimpleReactValidator())

  function forceUpdate() {
    setValue(value + 1);
  }

  //Return the appropriate validator for the current step
  const getCurrentStepValidation = () =>
  {
    switch (page) {
      case 0: return step1Validator
      case 1: return step2Validator
      case 2: return step3Validator
    }
  }

  const nextStep = () => {
    if(!getCurrentStepValidation()!.current.allValid())
    {
      getCurrentStepValidation()!.current.showMessages()
      forceUpdate()
      return
    }
    setPage(page + 1);
  };

  const prevStep = () => {
    setPage(page - 1);
  };

  const adminAddCompanySteps = [
    <SignUpCompanyFormStep1 inputValues={step1Values} setInputValues={setStep1Values} validator={step1Validator.current}/>,
    <SignUpCompanyFormStep2 inputValues={step2Values} setInputValues={setStep2Values} validator={step2Validator.current}/>,
    <SignUpCompanyFormStep3 inputValues={step3Values} setInputValues={setStep3Values} validator={step3Validator.current}/>,
  ];
  return (
    <div className="signup-formView">
      <div className="signup-form-container">{adminAddCompanySteps[page]}</div>
      <div className="signup-formStepButtons">
        {page !== 0 ? (
          <button className="signup-formStepPrevious" onClick={prevStep}>
            Previous
          </button>
        ) : (
          ""
        )}
        {page !== adminAddCompanySteps.length - 1 ? (
          <button className="signup-formStepNext" onClick={nextStep}>
            Next
          </button>
        ) : (
          ""
        )}
        {page === adminAddCompanySteps.length - 1 ? (
          <button className="signup-formStepNext" onClick={nextStep}>
            Submit
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export { SignUpCompanyForm };
