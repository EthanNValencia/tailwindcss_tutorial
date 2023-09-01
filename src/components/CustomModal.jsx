import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for accessibility

function CustomModal({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "300px",
          margin: "0 auto",
        },
      }}
    >
      <h2>Modal Content</h2>
      <p>This is an example modal content.</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}

export default CustomModal;
