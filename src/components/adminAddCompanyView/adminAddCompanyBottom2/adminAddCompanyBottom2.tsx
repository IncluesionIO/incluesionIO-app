import React from "react";
import './adminAddCompanyBottom2.css'

const AdminAddCompanyBottom2 = () => {
    return(
        <div className="admin-addCompanyBottom2">
            <div className="admin-addCompanyBar">
                <h1>Step 2</h1>
            </div>
            <div className="admin-addCompanyCaption">
                <h1 className="addCompanyCaptionTop">Lets info your company info</h1>
                <h2 className="addCompanyCaptionBottom">Share some details about your company</h2>
            </div>
            <div className="admin-addCompanyInputs">
                <form>
                    <label>Object ID:</label>
                    <input
                        type="text"
                        required
                    />
                    <label>Company Name:</label>
                    <input
                        type="text"
                        required
                    />
                    <label>Organization Type:</label>
                    <input
                        type="text"
                        required
                    />
                    <label>Company Admin Email:</label>
                    <input
                        type="text"
                        required
                    />
                </form>
            </div>
        </div>
    )
}

export {AdminAddCompanyBottom2}