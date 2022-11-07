import react, { useRef, useState } from 'react'
import ModalBase from '../../../globals/Modals/ModalBase'
import SimpleReactValidator from 'simple-react-validator';
import './CreateUserModal.css'

const CreateUserModal = (props:any) =>
{
  const [user, setUser] = useState<any>({role: 'USER'})
  const [value, setValue] = useState(0);
  const validator = useRef(new SimpleReactValidator())

  function forceUpdate() {
    setValue(value + 1);
  }
  
  const submit = () => {
    if (validator.current.allValid()) {
      props.createUser(user);
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
        <button
            className="user-modal-save-button"
            onClick={(_) => submit()}
          >
            Save
          </button>
      </div>
    );
  };

  return (
    <ModalBase closeModal={props.closeModal} title="Create New User" footer={modalFooter()}>
      <div className='create-user-modal-container'>
        <div className='create-user-modal-input-container'>
          <label>
            <p className='create-user-modal-p'>Username</p>
            <input type="text" placeholder='username' id='create-user-modal-username' className='create-user-modal-input' value={user.username} onChange={e => setUser({...user, username: e.target.value})} />
            {validator.current.message('username', user.username, 'required|alpha_space', { className: 'text-danger' })}
          </label>
        </div>
        <div className='create-user-modal-input-container'>
          <label>
            <p className='create-user-modal-p'>Full Name</p>
            <input type="text" placeholder='First Last' id='create-user-modal-name' className='create-user-modal-input' value={user.name} onChange={e => setUser({...user, name: e.target.value})} />
            {validator.current.message('Full name', user.name, 'required|alpha_space', { className: 'text-danger' })}
          </label>
        </div>
        <div className='create-user-modal-input-container'>
          <label>
            <p className='create-user-modal-p'>Email</p>
            <input type="email" placeholder='example@example.com' id='create-user-modal-email' className='create-user-modal-input' value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
            {validator.current.message('Full name', user.email, 'required|email', { className: 'text-danger' })}
          </label>
        </div>
        <div className='create-user-modal-input-container'>
          <label>
            <p className='create-user-modal-p'>Password</p>
            <input type="password" placeholder='Password' id='create-user-modal-password' className='create-user-modal-input' value={user.password} onChange={e => setUser({...user, password: e.target.value})} />
            {validator.current.message('password', user.password, 'required|alpha_num_dash_space|min:8,string', { className: 'text-danger' })}
          </label>
        </div>
        <div className='create-user-modal-input-container'>
          <label>
            <p className="create-user-modal-p">Role</p>
            <select value={user.role} onChange={e => setUser({...user, role: e.target.value})}>
              <option value={"ADMIN"}>Admin</option>
              <option value={"USER"}>User</option>
            </select>
          </label>
        </div>
      </div>

    </ModalBase>
  )
}

export default CreateUserModal