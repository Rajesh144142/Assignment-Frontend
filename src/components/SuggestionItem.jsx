import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { upvoteSuggestion , fetchSuggestions } from "../redux/suggestionSlice";

 const SuggestionItem = ({ suggestion }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleUpvote = () => {
    dispatch(upvoteSuggestion(suggestion.id));
    handleClose();
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div className="card mb-3" onClick={handleShow}>
        <div className="card-body">
          <h5 className="card-title">{suggestion.title}</h5>
          <p className="card-text">Votes: {suggestion.votes}</p>
        </div>
      </div>

      {/* Modal to show full description and allow upvoting */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{suggestion.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{suggestion.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpvote}>
            Upvote ({suggestion.votes})
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SuggestionItem;
