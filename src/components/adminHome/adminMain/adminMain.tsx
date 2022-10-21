import React from "react";
import './adminMain.css';
import { AdminSideBar } from "./adminSideBar/adminSideBar";
import { AdminDashboard } from "./adminDashboard/adminDashboard";

const AdminMain = () => {
    return (
        <div className='admin-main'>
            <AdminSideBar />
            <AdminDashboard />
        </div>
    )
}

export {AdminMain}