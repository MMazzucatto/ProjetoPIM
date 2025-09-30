import React from "react"
import "./Modal.css"

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null
  }

  const handleContentClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
