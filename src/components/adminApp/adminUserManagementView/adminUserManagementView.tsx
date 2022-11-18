import axios from "axios";
import React, { useState } from "react";
import HeaderButtons from "../../globals/HeaderButtons/HeaderButtons";
import AdminPageTitle from "../adminPageTitle/adminDashboardTitle";
import "./adminUserManagementView.css";
import CreateUserModal from "./CreateUserModal/CreateUserModal";
import UserListContainer from "./UserListContainer/UserListContainer";

const AdminUserManagementView = (props: any) => {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState(0);

  function forceUpdate() {
    setValue(value + 1);
  }

  const createUser = (user: any) => {
    axios
      .post("http://localhost:13000/user/create", {
        username: user.username,
        password: user.password,
        name: user.name,
        email: user.email,
        role: user.role,
        companyId: JSON.parse(localStorage.getItem('companyID') || ""),
        dateOfBirth: new Date(user.dob).toISOString()
      })
      .then((response) => {
        console.log(response)
        alert("User successfully created!");
        forceUpdate()
      })
      .catch((err) => {
        console.log(err)
        alert("There was an error creating user!");
      });
  };

  return (
    <div className="admin-main">
      <div className="admin-main-header">
        <AdminPageTitle title="User Management" />
        <HeaderButtons text="Export User List" disabled />
        <HeaderButtons
          text="Create User"
          onClick={() => {
            setOpenModal(true);
          }}
        />
      </div>
      <div className="admin-dashboardView">
        <UserListContainer />
      </div>
      {openModal ? (
        <CreateUserModal
          closeModal={() => {
            setOpenModal(false);
          }}
          createUser={createUser}
        />
      ) : null}
    </div>
  );
};

export default AdminUserManagementView;
