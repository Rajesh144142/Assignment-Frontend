// components/ErrorModal.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { clearError } from '../../redux/errorSlice'; // Import the clearError action

const ErrorModal = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error.message);

  const handleClose = () => {
    dispatch(clearError()); // Clear the error when closing the modal
  };

  return (
    <Modal show={!!error} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>{error}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
