import React from 'react'
import './Modal.scss'

const ModalPanel = ({ children }) => (
  <div className="modal__panel">
    {children}
  </div>
)

export default ModalPanel