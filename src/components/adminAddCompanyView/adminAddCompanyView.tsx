import React, { useState } from "react";
import './adminAddCompanyView.css'
import titleTextWhite from '../../img/Incluesion_Logo/PNG/titleTextWhite.png'
import { AdminAddCompanyBottom1 } from "./adminAddCompanyBottom1/adminAddCompanyBottom1";
import { AdminAddCompanyBottom2 } from "./adminAddCompanyBottom2/adminAddCompanyBottom2";
import { AdminAddCompanyBottom3 } from "./adminAddCompanyBottom3/adminAddCompanyBottom3";

const AdminAddCompanyView = () => {

    const [page, setPage] = useState(0);

    const adminAddCompanyBottom = [<AdminAddCompanyBottom1/>,<AdminAddCompanyBottom2/>,<AdminAddCompanyBottom3/>]
    return(
        <div className="admin-addCompanyView">
                <div className="admin-addCompanyTitle">
                    <img src={titleTextWhite} alt="TitleTextWhite" width={400} style={{marginTop: 15}}/>
                </div>
                <div className="admin-addCompanyInput">
                    <div className="admin-addCompanyBottomPage">
                        {adminAddCompanyBottom[page]}
                    </div>
                    <div className="admin-addCompanyInputButtons">
                        <button
                        className="admin-addCompanyInputPrevious"
                        onClick={() => {
                            setPage((currentPage) => currentPage - 1)
                        }}>Previous</button>
                        <button
                        className="admin-addCompanyInputNext"
                        onClick={() => {
                            setPage((currentPage) => currentPage + 1)
                        }}>
                            Next</button>
                    </div>
                    
                </div>
        </div>
    )
    
}

export {AdminAddCompanyView}