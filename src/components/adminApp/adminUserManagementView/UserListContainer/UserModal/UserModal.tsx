import axios from "axios";
import react, { useEffect, useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import format from "date-fns/format";
import ModalBase from "../../../../globals/Modals/ModalBase";
import avatar from "../icon/blank-profile-picture-973460_50x50.png";
import "./UserModal.css";

const UserModal = (props: any) => {
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(0);
  const validator = useRef(new SimpleReactValidator());

  function forceUpdate() {
    setValue(value + 1);
  }

  useEffect(() => {
    setEditMode(props.editMode);
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

  const submitUpdates = () => {
    if (validator.current.allValid()) {
      props.updateUser(user);
      props.closeModal();
    } else {
      validator.current.showMessages();
      forceUpdate();
    }
  };

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
          <button
            className="user-modal-save-button"
            onClick={(_) => submitUpdates()}
          >
            Save
          </button>
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
        title={`User Settings`}
        closeModal={props.closeModal}
        footer={modalFooter()}
      >
        <div className="user-modal-container">
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
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              ></input>
              {validator.current.message(
                "Full name",
                user.name,
                "required|alpha_space",
                { className: "text-danger" }
              )}
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
                disabled
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
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              ></input>
              {validator.current.message(
                "Email",
                user.email,
                "required|email",
                { className: "text-danger" }
              )}
            </label>
          </div>
          <div className="user-modal-role">
            <label>
              <p className="user-modal-p">Role</p>
              <select
                disabled={!editMode}
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              >
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
                  onChange={(e) =>
                    setUser({ ...user, accountStatus: e.target.value })
                  }
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
                  onChange={(e) =>
                    setUser({ ...user, accountStatus: Boolean(e.target.value) })
                  }
                />
                Deactivated
              </span>
            </label>
          </div>
          {!editMode ? (
            <div className="user-modal-lastLogin">
              <p className="user-modal-p">Last Login</p>
              <p className="user-modal-lastLogin-text">
                {user.lastLogin ? format(new Date(user.lastLogin), "LLL d yyyy hh:mm:ss aaaa") : "Not Available"}
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
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                ></input>
                {validator.current.message(
                  "password",
                  user.password,
                  "alpha_num_dash_space|min:8,string",
                  { className: "text-danger" }
                )}
              </label>
            </div>
          )}
        </div>
      </ModalBase>
    );
  }

  return <div></div>;
};

export default UserModal;
