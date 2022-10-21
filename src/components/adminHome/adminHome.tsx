import React from "react";
import './adminHome.css'
import { AdminTopBar } from "./adminTopBar/adminTopBar";
import { AdminMain } from "./adminMain/adminMain";

const AdminHome = () => {
    return (
        <div className="admin">
            <AdminTopBar />
            <AdminMain />
        </div>
    )
}

export {AdminHome}