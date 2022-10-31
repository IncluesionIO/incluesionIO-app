import React from "react";
import AdminPageTitle from "../adminPageTitle/adminDashboardTitle";
import "./adminDashboardView.css";
import { DashboardLeft } from "./dashboardLeft/dashboardLeft";
import { DashboardRight } from "./dashboardRight/dashboardRight";

const AdminDashboardView = (props: any) => {
  return (
    <div className="admin-main">
      <AdminPageTitle title="Dashboard" />

      <div className="admin-dashboardView">
        <DashboardLeft />
        <DashboardRight />
      </div>
    </div>
  );
};

export default AdminDashboardView;
