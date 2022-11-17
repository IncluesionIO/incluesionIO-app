import React from "react";
import './adminAddUserBottom2.css'

const AdminAddUserBottom2 = () => {
    return(
        <div className="admin-addUserBottom2">
            <div className="admin-addUserBar">
                <h1>bar</h1>
            </div>
            <div className="admin-addUserCaption">
                <h1 className="addUserCaptionTop">Lets info your company info</h1>
                <h2 className="addUserCaptionBottom">Share some details about your company</h2>
            </div>
            <div className="admin-addUserInputs">
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
                    <button>Next</button>
                </form>
            </div>
        </div>
    )
}

export {AdminAddUserBottom2}