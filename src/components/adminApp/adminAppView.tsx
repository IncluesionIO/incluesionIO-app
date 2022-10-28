import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { Navigate } from 'react-router-dom'
import Sidebar from "../globals/sidebar/sidebar";
import TopBar from "../globals/topBar/topBar";
import AdminAnalyticsView from "./adminAnalyticsView/adminAnalyticsView";
import './adminAppView.css'
import AdminDashboardView from "./adminDashBoardView/adminDashBoardView";
import AdminSettingsView from "./adminSettingsView/adminSettingsView";
import AdminUserManagementView from "./adminUserManagementView/adminUserManagementView";

const AdminAppView = () => {
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
                <Route path="/home" element={<AdminDashboardView />}></Route>
                <Route path="/users" element={<AdminUserManagementView />}></Route>
                <Route path="/analytics" element={<AdminAnalyticsView />}></Route>
                <Route path="/settings" element={<AdminSettingsView />}></Route>
                <Route path="/" element={<Navigate to="/admin/home" replace />}/>
            </Routes>
        </div>
    )
}

export default AdminAppView