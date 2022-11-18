import React from "react";
import './adminAddCompanyBottom3.css'

const AdminAddCompanyBottom3 = () => {
    return(
        <div className="admin-addCompanyBottom3">
            <div className="admin-addCompanyBar">
                <h1>Step 3</h1>
            </div>
            <div className="admin-addCompanyCaption">
                <h1 className="addCompanyCaptionTop">Some additional info</h1>
                <h2 className="addCompanyCaptionBottom">Let's setup your company details accordingly</h2>
            </div>
            <div className="admin-addCompanyInputs">
                <form>
                    <label>Details:</label>
                    <textarea
                        required
                    />
                    <label>Details:</label>
                    <textarea
                        required
                    />
                    <label>Details:</label>
                    <textarea
                        required
                    />
                </form>
            </div>
        </div>
    )
}

export {AdminAddCompanyBottom3}