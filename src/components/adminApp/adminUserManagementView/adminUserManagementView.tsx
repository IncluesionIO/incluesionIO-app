import React from "react";
import HeaderButtons from "../../globals/HeaderButtons/HeaderButtons";
import AdminPageTitle from "../adminPageTitle/adminDashboardTitle";
import "./adminUserManagementView.css";
import UserListContainer from "./UserListContainer/UserListContainer";

const AdminUserManagementView = (props: any) => {
  return (
    <div className="admin-main">
      <div className="admin-main-header">
        <AdminPageTitle title="User Management" />
        <HeaderButtons text="Export User List" />
        <HeaderButtons text="Invite Members" disabled/>
      </div>
      <div className="admin-dashboardView">
        <UserListContainer />
      </div>
    </div>
  );
};

export default AdminUserManagementView;
