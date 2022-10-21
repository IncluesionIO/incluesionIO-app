import React from "react";
import './adminDashboardView.css'
import { DashboardLeft } from "./dashboardLeft/dashboardLeft";
import { DashboardRight } from "./dashboardRight/dashboardRight";

const AdminDashboardView = () => {
    return (
        <div className='admin-dashboardView'>
            
            <DashboardLeft />

            <DashboardRight />
            
        </div>    
    )
}

export {AdminDashboardView}