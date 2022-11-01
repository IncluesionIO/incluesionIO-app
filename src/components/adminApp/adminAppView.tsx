import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useNavigate, Navigate } from 'react-router-dom'
import Sidebar from "../globals/sidebar/sidebar";
import TopBar from "../globals/topBar/topBar";
import AdminAnalyticsView from "./adminAnalyticsView/adminAnalyticsView";
import './adminAppView.css'
import AdminDashboardView from "./adminDashBoardView/adminDashBoardView";
import AdminSettingsView from "./adminSettingsView/adminSettingsView";
import AdminUserManagementView from "./adminUserManagementView/adminUserManagementView";

const AdminAppView = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

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
    useEffect(() =>
    {
        if(userId)
        {
            axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('userAuth') || "")}`
            axios.get("http://localhost:13000/auth")
            .then(response =>
                {
                    setLoading(false)
                })
            .catch(err =>
                {
                    navigate('/')
                })
        }
        else {
            navigate('/')
        }
    })
    if(!loading)
    {
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

    return (<div></div>)
}

export default AdminAppView