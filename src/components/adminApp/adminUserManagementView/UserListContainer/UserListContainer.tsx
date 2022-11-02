import react from "react";
import "./UserListContainer.css";
import { ReactComponent as MagnifyingGlass } from "./icon/magnifying-glass-solid.svg";
import { ReactComponent as FilterIcon } from "./icon/filter-solid.svg";
import { ReactComponent as ChaveronIcon } from "./icon/chevron-down-solid.svg";
const UserListContainer = () => {
  return (
    <div className="userList-container">
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
        <table className="userList-table">
          <thead>
            <td className="userList-table-header">Name</td>
            <td className="userList-table-header">Account Access</td>
            <td className="userList-table-header">Status</td>
            <td className="userList-table-header">Last Login</td>
            <td className="userList-table-header">Actions</td>
          </thead>
          <tbody>
            <tr className="userList-table-row">
              <td>
                <div className="userList-table-name">
                  <div className="userIcon">
                    <img src="#" className="userIcon-img"></img>
                  </div>
                  <div className="userInfo">
                    <p className="user-Fullname">Brett Finlay</p>
                    <p className="user-email">brett.finlay@company.com</p>
                  </div>
                </div>
              </td>
              <td>Full Member</td>
              <td>Active</td>
              <td>
                Wednesday, October 26, 2022 <br /> 17:11
              </td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr className="userList-table-row">
              <td>
                <div className="userList-table-name">
                  <div className="userIcon">
                    <img src="#" className="userIcon-img"></img>
                  </div>
                  <div className="userInfo">
                    <p className="user-Fullname">Brett Finlay</p>
                    <p className="user-email">brett.finlay@company.com</p>
                  </div>
                </div>
              </td>
              <td>Full Member</td>
              <td>Active</td>
              <td>
                Wednesday, October 26, 2022 <br /> 17:11
              </td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr className="userList-table-row">
              <td>
                <div className="userList-table-name">
                  <div className="userIcon">
                    <img src="#" className="userIcon-img"></img>
                  </div>
                  <div className="userInfo">
                    <p className="user-Fullname">Brett Finlay</p>
                    <p className="user-email">brett.finlay@company.com</p>
                  </div>
                </div>
              </td>
              <td>Full Member</td>
              <td>Active</td>
              <td>
                Wednesday, October 26, 2022 <br /> 17:11
              </td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr className="userList-table-row">
              <td>
                <div className="userList-table-name">
                  <div className="userIcon">
                    <img src="#" className="userIcon-img"></img>
                  </div>
                  <div className="userInfo">
                    <p className="user-Fullname">Brett Finlay</p>
                    <p className="user-email">brett.finlay@company.com</p>
                  </div>
                </div>
              </td>
              <td>Full Member</td>
              <td>Active</td>
              <td>
                Wednesday, October 26, 2022 <br /> 17:11
              </td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr className="userList-table-row">
              <td>
                <div className="userList-table-name">
                  <div className="userIcon">
                    <img src="#" className="userIcon-img"></img>
                  </div>
                  <div className="userInfo">
                    <p className="user-Fullname">Brett Finlay</p>
                    <p className="user-email">brett.finlay@company.com</p>
                  </div>
                </div>
              </td>
              <td>Full Member</td>
              <td>Active</td>
              <td>
                Wednesday, October 26, 2022 <br /> 17:11
              </td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr className="userList-table-row">
              <td>
                <div className="userList-table-name">
                  <div className="userIcon">
                    <img src="#" className="userIcon-img"></img>
                  </div>
                  <div className="userInfo">
                    <p className="user-Fullname">Brett Finlay</p>
                    <p className="user-email">brett.finlay@company.com</p>
                  </div>
                </div>
              </td>
              <td>Full Member</td>
              <td>Active</td>
              <td>
                Wednesday, October 26, 2022 <br /> 17:11
              </td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
            <tr className="userList-table-row">
              <td>
                <div className="userList-table-name">
                  <div className="userIcon">
                    <img src="#" className="userIcon-img"></img>
                  </div>
                  <div className="userInfo">
                    <p className="user-Fullname">Brett Finlay</p>
                    <p className="user-email">brett.finlay@company.com</p>
                  </div>
                </div>
              </td>
              <td>Full Member</td>
              <td>Active</td>
              <td>
                Wednesday, October 26, 2022 <br /> 17:11
              </td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListContainer;
