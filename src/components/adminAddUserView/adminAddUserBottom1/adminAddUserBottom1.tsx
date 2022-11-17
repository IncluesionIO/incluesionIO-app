import React from "react";
import './adminAddUserBottom1.css'

const AdminAddUserBottom1 = () => {
    return(
        <div className="admin-addUserBottom1">
            <div className="admin-addUserBar">
                <h1>number bar</h1>
            </div>
            <div className="admin-addUserCaption">
                <h1 className="addUserCaptionTop">First things first</h1>
                <h2 className="addUserCaptionBottom">You can always change these settings</h2>
            </div>
            <div className="admin-addUserInputs">
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
                    <button>Next</button>
                </form>
            </div>
        </div>
    )
}

export {AdminAddUserBottom1}