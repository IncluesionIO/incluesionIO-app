import react from 'react'
import './ModalBase.css'
import {ReactComponent as CloseButton} from './icons/xmark-solid.svg'

const ModalBase = (props:any) =>
{
  const onClose = () =>
  {
    props.closeModal()
  }

  return (
    <div className='modal-backdrop' onClick={_ => onClose()}>
      <div className='modal-container' onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <h2>{props.title}</h2>
            <button className="close-button" onClick={_ => onClose()}><CloseButton className="close-button-svg"/></button>
          </div>
        </div>
        <div className="modal-body">
          {props.children}
        </div>
        <div className='modal-footer'>
          {props.footer}
        </div>
      </div>
    </div>
  )
}

export default ModalBase