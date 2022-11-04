import axios from 'axios'
import react, { useEffect, useState } from 'react'
import ModalBase from '../../../../globals/Modals/ModalBase'
import avatar from '../icon/blank-profile-picture-973460_50x50.png'
import './UserModal.css'

const UserModal = (props:any) =>
{
  const [user, setUser] = useState<any>({})
  const [loading, setLoading] = useState(true)
  useEffect(() =>
  {
    axios.get(`http://localhost:13000/user/get/${props.userId}`)
    .then(response =>
      {
        setUser(response.data)
        setLoading(false)
      })
    .catch(err =>
      {
        console.log(err)
      })
  }, [props.userId])
  
  const modalFooter = () =>
  {
    return (
      <div className='footer'>
        <button className='user-modal-cancel-button' onClick={_ => {props.closeModal()}}>Cancel</button>
        <button className='user-modal-save-button'>Save</button>
      </div>
    )
  }

  if(!loading)
  {
    return (
      <ModalBase title={`${user.name} Settings`} closeModal={props.closeModal} footer={modalFooter()}>
        <div className='user-modal-avatar'>
          <img src={props.imageUrl ? props.imageUrl : avatar} alt="" className="user-modal-Icon-img"></img>
        </div>
        <div className='user-modal-name'>
          <label >
            <p className='user-modal-p'>Full Name</p>
            <input type="text" id="user-modal-name" className={"user-modal-input"} value={user.name} disabled></input>
          </label>
        </div>
        <div className='user-modal-username'>
        <label >
            <p className='user-modal-p'>Username</p>
            <input type="text" id="user-modal-username" className={"user-modal-input"} value={user.username} disabled></input>
          </label>
        </div>
        <div className='user-modal-email'>
        <label >
            <p className='user-modal-p'>Email</p>
            <input type="text" id="user-modal-email" className={"user-modal-input"} value={user.email} disabled></input>
          </label>
        </div>
        <div className='user-modal-role'>
        <label >
            <p className='user-modal-p'>Role</p>
            <select disabled value={user.role}>
              <option value={"ADMIN"}>Admin</option>
              <option value={"USER"}>User</option>
            </select>
          </label>
        </div>
        <div className='user-modal-status'>
        <label >
            <p className='user-modal-p'>Status</p>
            <span><input type={"radio"} value={"true"} name="accountStatus" checked={user.accountStatus} disabled />Active</span>
            
            <span><input type={"radio"} value={"true"} name="accountStatus" checked={!user.accountStatus} disabled/>Deactivated</span>
          </label>
        </div>
        <div className='user-modal-lastLogin'>
        <p className='user-modal-p'>Last Login</p>
          <p className='user-modal-lastLogin-text'>{user.lastLogin ? user.lastLogin : 'Not Available'}</p>
        </div>
      </ModalBase>
      )
  }

  return (<div></div>)
  
} 

export default UserModal