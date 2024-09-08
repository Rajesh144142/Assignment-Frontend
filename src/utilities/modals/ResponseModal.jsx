import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { clearResponse } from '../../redux/responseSlice'; 

const ResponseModal = () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector((state) => state.response);

  const handleClose = () => {
    dispatch(clearResponse()); 
  };

  return (
    <Modal show={!!message} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{type}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button  variant={type === 'SUCCESS' ? 'success' : 'danger'} 
          onClick={handleClose}
        >
          {type === 'SUCCESS' ? 'Great!' : 'Close'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResponseModal;
