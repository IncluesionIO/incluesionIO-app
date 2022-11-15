import React from "react";
import AdminPageTitle from "../adminPageTitle/adminDashboardTitle";
import "./adminAnalyticsView.css";
import AnalyticsContainer from "./AnalyticsContainer/AnalyticsContainer";

const AdminAnalyticsView = (props: any) => {
  return (
    <div className="admin-main">
      <AdminPageTitle title="Analytics" />

      <div className="admin-dashboardView">
        <AnalyticsContainer />
      </div>
    </div>
  );
};

export default AdminAnalyticsView;
