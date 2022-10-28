import React from "react";
import './adminMain.css';

import { AdminDashboard } from "./adminDashboard/adminDashboard";
import Sidebar from "../../globals/sidebar/sidebar";

const AdminMain = () => {
    return (
        <div className='admin-main'>
            <AdminDashboard />
        </div>
    )
}

export {AdminMain}