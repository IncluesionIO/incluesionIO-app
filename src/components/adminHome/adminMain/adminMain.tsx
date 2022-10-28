import React from "react";
import { AdminDashboardView } from "./adminDashBoardView/adminDashBoardView";
import './adminMain.css';

import AdminPageTitle from "./adminPageTitle/adminDashboardTitle";

const AdminMain = (props: any) => {
    return (
        <div className='admin-main'>
            <AdminPageTitle title={props.title} />
            <AdminDashboardView />
        </div>
    )
}

export {AdminMain}