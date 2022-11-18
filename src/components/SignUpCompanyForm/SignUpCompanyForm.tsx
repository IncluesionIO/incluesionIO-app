import axios from "axios";
import format from "date-fns/format";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import "./SignUpCompanyForm.css";
import { SignUpCompanyFormStep1 } from "./SignUpCompanyFormStep1/SignUpCompanyFormStep1";
import { SignUpCompanyFormStep2 } from "./SignUpCompanyFormStep2/SignUpCompanyFormStep2";
import { SignUpCompanyFormStep3 } from "./SignUpCompanyFormStep3/SignUpCompanyFormStep3";

const SignUpCompanyForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  //Keep page record
  const [page, setPage] = useState(0);
  //Each steps values
  const [step1Values, setStep1Values] = useState({
    companyName: "",
    companyOrgType: "",
    companyEmail: "",
    companySupportEmail: "",
  });
  const [step2Values, setStep2Values] = useState({ companyIndustry: "" });
  const [step3Values, setStep3Values] = useState({
    adminName: "",
    adminUsername: "",
    adminEmail: "",
    adminDob: null,
  });
  //To allow forced updates
  const [value, setValue] = useState(0);

  //Create a validator for each step
  const step1Validator = useRef(new SimpleReactValidator());
  const step2Validator = useRef(new SimpleReactValidator());
  const step3Validator = useRef(new SimpleReactValidator());

  function forceUpdate() {
    setValue(value + 1);
  }

  //Return the appropriate validator for the current step
  const getCurrentStepValidation = () => {
    switch (page) {
      case 0:
        return step1Validator;
      case 1:
        return step2Validator;
      case 2:
        return step3Validator;
    }
  };

  const nextStep = () => {
    if (!getCurrentStepValidation()!.current.allValid()) {
      getCurrentStepValidation()!.current.showMessages();
      forceUpdate();
      return;
    }
    setPage(page + 1);
  };

  const prevStep = () => {
    setPage(page - 1);
  };

  const submitCompany = () => {
    if (!getCurrentStepValidation()!.current.allValid()) {
      getCurrentStepValidation()!.current.showMessages();
      forceUpdate();
      return;
    }
    //If case an error happened when creating the user, avoid creating the company again
    if (localStorage.getItem("createdCompanyID")) {
      axios
        .post("http://localhost:13000/admin/create", {
          username: step3Values.adminUsername,
          password: "password",
          name: step3Values.adminName,
          email: step3Values.adminEmail,
          role: "ADMIN",
          companyId: JSON.parse(localStorage.getItem("createdCompanyID") || ""),
        })
        .then((accountCreatedRes) => {
          navigate("/");
        })
        .catch((err) => {
          setError(true);
        });
      return;
    }


    axios
      .post("http://localhost:13000/company/create", {
        name: step1Values.companyName,
        organizationType: step1Values.companyOrgType,
        industry: step2Values.companyIndustry,
        contactEmail: step1Values.companyEmail,
        supportEmail: step1Values.companySupportEmail,
      })
      .then((response) => {
        //Set the created company ID to localstorage in case of an error with creating the user
        localStorage.setItem(
          "createdCompanyID",
          JSON.stringify(response.data.companyId)
        );
        //Send account creation request
        axios
          .post("http://localhost:13000/admin/create", {
            username: step3Values.adminUsername,
            password: "password",
            name: step3Values.adminName,
            email: step3Values.adminEmail,
            role: "ADMIN",
            companyId: response.data.companyId,
          })
          .then((accountCreatedRes) => {
            navigate("/");
          })
          .catch((err) => {
            setError(true);
          });
      })
      .catch((err) => {
        setError(true);
      });
  };

  const adminAddCompanySteps = [
    <SignUpCompanyFormStep1
      inputValues={step1Values}
      setInputValues={setStep1Values}
      validator={step1Validator.current}
    />,
    <SignUpCompanyFormStep2
      inputValues={step2Values}
      setInputValues={setStep2Values}
      validator={step2Validator.current}
    />,
    <SignUpCompanyFormStep3
      inputValues={step3Values}
      setInputValues={setStep3Values}
      validator={step3Validator.current}
    />,
  ];
  return (
    <div className="signup-formView">
      {error ? (
        <div className="errorAlert">
          There was an error with your request, please try again later
        </div>
      ) : (
        ""
      )}
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
          <button className="signup-formStepNext" onClick={submitCompany}>
            Submit
          </button>
        ) : (
          ""
        )}
      </div>
      <Link to={"/"}>Return to login</Link>
    </div>
  );
};

export { SignUpCompanyForm };
