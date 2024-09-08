import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { SuggestionForm } from "./SuggestionForm";

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-between align-items-center my-3">
      <h4>Suggestion System</h4>
      <Button variant="primary" onClick={handleShow}>
        Create New Suggestion
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Suggestion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SuggestionForm closeModal={handleClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
};
