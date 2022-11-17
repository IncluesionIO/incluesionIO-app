import React from "react";
import HeaderButtons from "../../globals/HeaderButtons/HeaderButtons";
import AdminPageTitle from "../adminPageTitle/adminDashboardTitle";
import "./adminAnalyticsView.css";
import AnalyticsContainer from "./AnalyticsContainer/AnalyticsContainer";

const AdminAnalyticsView = (props: any) => {
  return (
    <div className="admin-main">
      <div className="admin-main-header">
        <AdminPageTitle title="Analytics" />
        <HeaderButtons disabled text="Generate PDF" />
      </div>

      <div className="admin-dashboardView">
        <AnalyticsContainer />
      </div>
    </div>
  );
};

export default AdminAnalyticsView;
