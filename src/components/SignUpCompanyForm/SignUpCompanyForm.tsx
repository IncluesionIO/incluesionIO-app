import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import "./SignUpCompanyForm.css";
import { SignUpCompanyFormStep1 } from "./SignUpCompanyFormStep1/SignUpCompanyFormStep1";
import { SignUpCompanyFormStep2 } from "./SignUpCompanyFormStep2/SignUpCompanyFormStep2";
import { SignUpCompanyFormStep3 } from "./SignUpCompanyFormStep3/SignUpCompanyFormStep3";

const SignUpCompanyForm = () => {
  const [page, setPage] = useState(0);
  const [inputValues, setInputValues] = useState({})

  const nextStep = () =>
  {
    setPage(page + 1)
  }

  const prevStep = () =>
  {
    setPage(page - 1)
  }

  const adminAddCompanySteps = [
    <SignUpCompanyFormStep1 inputValues setInputValues/>,
    <SignUpCompanyFormStep2 inputValues setInputValues/>,
    <SignUpCompanyFormStep3 inputValues setInputValues/>,
  ];
  return (
    <div className="admin-addCompanyView">
      <div className="admin-addCompanyInput">
        <div className="admin-addCompanyBottomPage">
          {adminAddCompanySteps[page]}
        </div>
        <div className="admin-addCompanyInputButtons">
        {page !== 0 ? 
          <button
            className="admin-addCompanyInputPrevious"
            onClick={prevStep}
          >
            Previous
          </button>
        : ""
        }
        {page !== adminAddCompanySteps.length -1 ? 
          <button
            className="admin-addCompanyInputNext"
            onClick={nextStep}
          >
            Next
          </button>
          : "" }
        </div>
      </div>
    </div>
  );
};

export { SignUpCompanyForm };
