import React, { useState } from "react";
import { Navigate } from 'react-router-dom'
import './adminHome.css'
import { AdminTopBar } from "./adminTopBar/adminTopBar";
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
            <AdminTopBar />
            <AdminMain />
        </div>
    )
}

export default AdminHome