import axios from 'axios'
import react, { useState } from 'react'
import ModalBase from '../../../../globals/Modals/ModalBase'
import avatar from '../icon/blank-profile-picture-973460_50x50.png'
import './UserModal.css'

const UserModal = (props:any) =>
{
  const [loading, setLoading] = useState(true)
  console.log(`http://localhost:13000/user/get/${props.userId}`)
  axios.get(`http://localhost:13000/user/get/${props.userId}`)
  .then(response =>
    {
      console.log(response)
    })
  .catch(err =>
    {
      console.log(err)
    })

  return (
    <ModalBase title="View User" closeModal={props.closeModal}>
      <div className='user-modal-avatar'>
        <img src={props.imageUrl ? props.imageUrl : avatar} alt="" className="user-modal-Icon-img"></img>
      </div>
      <div className='user-modal-name'>
        <p className='user-modal-name-text'>{}</p>
      </div>
    </ModalBase>
    )
} 

export default UserModal