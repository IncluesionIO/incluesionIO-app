import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Navigate } from 'react-router-dom'
import Sidebar from "../globals/sidebar/sidebar";
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
            <div className="admin-header">
                <TopBar />
            </div>
            <Sidebar />
            <Routes>
                <Route path="/home" element={<AdminMain title="Dashboard" />}></Route>
                <Route path="/users"></Route>
                <Route path="/analytics"></Route>
                <Route path="/settings"></Route>
                <Route path="/" element={<Navigate to="/admin/home" replace />}/>
            </Routes>
        </div>
    )
}

export default AdminHome