import React from "react";
import '../SignUpCompanyForm.css'

const SignUpCompanyFormStep1 = ({inputValues, setInputValues}: {inputValues:any, setInputValues: any}) => {
    return(
        <div className="admin-addCompanyBottom1">
            <div className="admin-addCompanyBar">
                <h1>Step 1</h1>
            </div>
            <div className="admin-addCompanyCaption">
                <h1 className="addCompanyCaptionTop">First things first</h1>
                <h2 className="addCompanyCaptionBottom">You can always change these settings</h2>
            </div>
            <div className="admin-addCompanyInputs">
                <form>
                    <label>Email:</label>
                    <input
                        type="text"
                        required
                    />
                    <label>Full Name:</label>
                    <input
                        type="text"
                        required
                    />
                    <label>Password:</label>
                    <input
                        type="text"
                        required
                    />
                    <label>Repeat Password:</label>
                    <input
                        type="text"
                        required
                    />
                </form>
            </div>
        </div>
    )
}

export {SignUpCompanyFormStep1}