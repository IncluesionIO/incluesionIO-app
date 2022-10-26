import React, { useState } from "react";
import { Navigate } from 'react-router-dom'
import TopBar from "../globals/topBar/topBar";
import './adminHome.css'
import { AdminMain } from "./adminMain/adminMain";

const AdminHome = () => {
    const [userId, setUserId] = useState(() =>
    {
        const saved = localStorage.getItem('userId')
        if(saved)
        {
            const value = JSON.parse(saved)
            return value || ""
        }
        return ""
    })

    if(!userId.length)
    {
        return <Navigate to='/' replace />
    }

    return (
        <div className="admin">
            <TopBar />
            <AdminMain />
        </div>
    )
}

export default AdminHome