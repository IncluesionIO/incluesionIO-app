import react, { useState } from "react";
import "./UserRow.css";
import avatar from '../icon/blank-profile-picture-973460_50x50.png'
import {ReactComponent as UserEditIcon} from '../icon/contextMenu.svg' 

/**
 * 
 * @param props.userId - User Id, used to properly open user information
 * @param props.imageUrl - Image Url for user avatar 
 * @param props.fullName - Full name to display for user
 * @param props.email - Email to display for user
 * @param props.role - Role to display for user
 * @param props.status - Account status to display for user
 * @param props.lastLogin - Last login to display for user
 * @param props.onClick - Function to run when the row is clicked
 * @returns React Component
 */
const UserRow = (props: any) => {
  const NO_DATA_MSG = 'Not Available'
  const [contextMenuOpen, setContextMenuOpen] = useState(false)


  //Context Menu Handler to close when a click event is heard
  const handleContextMenuUnfocus = (e:any) =>
  {
    if(document.querySelector(".user-context-menu") !== e.target)
      {
        setContextMenuOpen(false)
        window.removeEventListener("mouseup", handleContextMenuUnfocus)
      }
  }
  //Register the listener if the context menu is open
  if(contextMenuOpen)
  {
    window.addEventListener('mouseup', handleContextMenuUnfocus)
  }

  return (
    <tr className="userList-table-row" onClick={e => props.onClick(props.userId)}>
      <td>
        <div className="userList-table-name">
          <div className="userIcon">
            <img src={props.imageUrl ? props.imageUrl : avatar} alt="" className="userIcon-img"></img>
          </div>
          <div className="userInfo">
            <p className="user-Fullname">{props.fullName ? props.fullName : NO_DATA_MSG}</p>
            <p className="user-email">{props.email ? props.email : NO_DATA_MSG}</p>
          </div>
        </div>
      </td>
      <td>{props.role ? props.role : NO_DATA_MSG}</td>
      <td>{props.status ? props.status : NO_DATA_MSG}</td>
      <td>
        {props.lastLogin ? props.lastLogin : NO_DATA_MSG}
      </td>
      <td className="actions">
        <button onClick={e => {setContextMenuOpen(!contextMenuOpen); e.stopPropagation()}} className="user-menu-button"><UserEditIcon /></button>
        <div className="user-context-menu" style={{"display": contextMenuOpen ? "block" : "none"}}>
          <button className="user-context-menu-button">Edit</button>
          <button className="user-context-menu-button">Change Account Role</button>
          <button className="user-context-menu-button deactivate">Deactivate Account</button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
