import React from "react";
import './adminAddUserView.css'
import titleTextWhite from '../../img/titleTextWhite.png'
import { AdminAddUserBottom1 } from "./adminAddUserBottom1/adminAddUserBottom1";
import { AdminAddUserBottom2 } from "./adminAddUserBottom2/adminAddUserBottom2";

const AdminAddUserView = () => {

    return(
        <div className="admin-addUserView">
                <div className="admin-addUserTitle">
                    <img src={titleTextWhite} alt="TitleTextWhite" width={400}/>
                </div>
                {/* you can uncomment one out of the addUserBottom component
                and see 2nd step */}
                <AdminAddUserBottom1 />
                {/* <AdminAddUserBottom2 /> */}
        </div>
    )
    
}

export {AdminAddUserView}