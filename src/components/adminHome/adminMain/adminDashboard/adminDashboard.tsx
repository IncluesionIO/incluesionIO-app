import React from "react";
import './adminDashboard.css';
import { AdminDashboardTitle } from "./adminDashBoardTitle/adminDashboardTitle";
import { AdminDashboardView } from "./adminDashBoardView/adminDashBoardView";

const AdminDashboard = () => {
    return (
        <div className='admin-dashboard'>
            
            <AdminDashboardTitle />
            <AdminDashboardView />
            
        </div>
    )
}

export {AdminDashboard}