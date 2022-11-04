import axios from "axios";
import react, { useEffect, useState } from "react";
import ModalBase from "../../../../globals/Modals/ModalBase";
import avatar from "../icon/blank-profile-picture-973460_50x50.png";
import "./UserModal.css";

const UserModal = (props: any) => {
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    setEditMode(props.editMode)
    axios
      .get(`http://localhost:13000/user/get/${props.userId}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.editMode, props.userId]);
  console.log(user)
  const modalFooter = () => {
    return (
      <div className="footer">
        <button
          className="user-modal-cancel-button"
          onClick={(_) => {
            props.closeModal();
          }}
        >
          Cancel
        </button>
        {editMode ? (
          <button className="user-modal-save-button">Save</button>
        ) : (
          <button
            className="user-modal-save-button"
            onClick={(_) => setEditMode(true)}
          >
            Edit
          </button>
        )}
      </div>
    );
  };

  if (!loading) {
    return (
      <ModalBase
        title={`${user.name} Settings`}
        closeModal={props.closeModal}
        footer={modalFooter()}
      >
        <div className="user-modal-avatar">
          <img
            src={props.imageUrl ? props.imageUrl : avatar}
            alt=""
            className="user-modal-Icon-img"
          ></img>
        </div>
        <div className="user-modal-name">
          <label>
            <p className="user-modal-p">Full Name</p>
            <input
              type="text"
              placeholder="Full Name"
              id="user-modal-name"
              className={"user-modal-input"}
              value={user.name}
              disabled={!editMode}
              onChange={e => setUser({...user, name: e.target.value})}
            ></input>
          </label>
        </div>
        <div className="user-modal-username">
          <label>
            <p className="user-modal-p">Username</p>
            <input
              type="text"
              id="user-modal-username"
              className={"user-modal-input"}
              value={user.username}
              disabled={!editMode}
              onChange={e => setUser({...user, username: e.target.value})}
            ></input>
          </label>
        </div>
        <div className="user-modal-email">
          <label>
            <p className="user-modal-p">Email</p>
            <input
              type="text"
              id="user-modal-email"
              className={"user-modal-input"}
              value={user.email}
              disabled={!editMode}
              onChange={e => setUser({...user, email: e.target.value})}
            ></input>
          </label>
        </div>
        <div className="user-modal-role">
          <label>
            <p className="user-modal-p">Role</p>
            <select disabled={!editMode} value={user.role} onChange={e => setUser({...user, role: e.target.value})}>
              <option value={"ADMIN"}>Admin</option>
              <option value={"USER"}>User</option>
            </select>
          </label>
        </div>
        <div className="user-modal-status">
          <label>
            <p className="user-modal-p">Status</p>
            <span>
              <input
                type={"radio"}
                value={"true"}
                name="accountStatus"
                checked={user.accountStatus}
                disabled={!editMode}
                onChange={e => setUser({...user, accountStatus: e.target.value})}
              />
              Active
            </span>

            <span>
              <input
                type={"radio"}
                value={""}
                name="accountStatus"
                checked={!user.accountStatus}
                disabled={!editMode}
                onChange={e => setUser({...user, accountStatus: Boolean(e.target.value)})}
              />
              Deactivated
            </span>
          </label>
        </div>
        {!editMode ? (
          <div className="user-modal-lastLogin">
            <p className="user-modal-p">Last Login</p>
            <p className="user-modal-lastLogin-text">
              {user.lastLogin ? user.lastLogin : "Not Available"}
            </p>
          </div>
        ) : (
          <div className="user-modal-password">
            <label>
              <p className="user-modal-p">
                Password: Use this field to set a password for a user.
              </p>
              <input
                type="text"
                placeholder="password"
                id="user-modal-password"
                className={"user-modal-input"}
                disabled={!editMode}
                onChange={e => setUser({...user, password: e.target.value})}
              ></input>
            </label>
          </div>
        )}
      </ModalBase>
    );
  }

  return <div></div>;
};

export default UserModal;
