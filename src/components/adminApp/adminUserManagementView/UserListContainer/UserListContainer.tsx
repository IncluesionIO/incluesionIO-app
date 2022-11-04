import react, { useEffect, useState } from "react";
import "./UserListContainer.css";
import Lottie from "react-lottie";
import * as animationData from "./icon/125182-loading.json";
import { ReactComponent as MagnifyingGlass } from "./icon/magnifying-glass-solid.svg";
import { ReactComponent as FilterIcon } from "./icon/filter-solid.svg";
import { ReactComponent as ChaveronIcon } from "./icon/chevron-down-solid.svg";
import UserRow from "./UserRow/UserRow";
import axios from "axios";
import UserModal from "./UserModal/UserModal";
const UserListContainer = () => {
  const [userList, setUserList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpened, setModalOpened] = useState(false);
  const [modalEditMode, setModalEditMode] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");
  useEffect(() =>
  {
    axios
    .get("http://localhost:13000/user/list")
    .then((response) => {
      setUserList(response.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
  })
  
  const updateUser = (user: any) => {
    console.log(user);
    axios
      .put("http://localhost:13000/admin/userUpdate", {
        userId: user.id,
        changeObject: {
          username: user.username,
          email: user.email,
          name: user.name,
          role: user.role,
          accountStatus: user.accountStatus,
        },
      })
      .then((response) => {
        console.log(response);
        setUserList([]);
        alert("User updated successfully!");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          alert("Operation not allowed!");
        }
      });

    if (user.password) {
      axios
        .put("http://localhost:13000/admin/userPasswordReset", {
          userId: user.id,
          newPassword: user.password,
        })
        .then((response) => {
          alert("User password updated successfully!");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const operateModal = (userId: any, modalOpenAsEdit: boolean) => {
    setSelectedUserId(userId);
    setModalOpened(true);
    setModalEditMode(modalOpenAsEdit);
  };

  const renderUserList = () => {
    return userList.map((user) => {
      const seed = Math.floor(Math.random() * 1000);
      return (
        <UserRow
          userId={user.id}
          imageUrl={user.avatar}
          fullName={user.name}
          email={user.email}
          role={user.role}
          status={user.accountStatus ? "Active" : "Deactivated"}
          lastLogin={user.lastLogin}
          onClick={operateModal}
        />
      );
    });
  };

  return (
    <div className="userList-container">
      {modalOpened ? (
        <UserModal
          userId={selectedUserId}
          closeModal={() => setModalOpened(false)}
          editMode={modalEditMode}
          updateUser={updateUser}
        />
      ) : null}
      <div className="userList-header">
        <div className="userList-search">
          <div className="userList-search-icon">
            <MagnifyingGlass />
          </div>
          <div className="userList-search-input-container">
            <input
              type={"text"}
              placeholder={"Search current members"}
              className="userList-search-input"
            ></input>
          </div>
        </div>

        <div className="userList-filter">
          <button className="userList-filter-button">
            <FilterIcon className="userList-filter-icon" />
            Filters
            <ChaveronIcon className="userList-filter-icon-chevron" />
          </button>
        </div>
      </div>
      <div className="userList-table-container">
        {loading ? (
          <div className="user-loading">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              width={200}
            ></Lottie>
          </div>
        ) : (
          <table className="userList-table">
            <thead>
              <td className="userList-table-header">Name</td>
              <td className="userList-table-header">Account Access</td>
              <td className="userList-table-header">Status</td>
              <td className="userList-table-header">Last Login</td>
              <td className="userList-table-header"></td>
            </thead>
            <tbody>{renderUserList()}</tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserListContainer;
