import React, { useState } from 'react';

function Modal({ isOpen, onClose, children }) {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button onClick={handleOpenModal}>Abrir modal</button>
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        <p>Este es el contenido del modal.</p>
      </Modal>
    </div>
  );
}

export default App;