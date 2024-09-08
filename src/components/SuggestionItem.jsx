import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { upvoteSuggestion  } from "../redux/suggestionSlice";
import UpVoteModal from "../utilities/modals/upVoteModal";
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
       <div onClick={handleShow}className="card mb-3 shadow-sm hover-shadow" 
               style={{ cursor: 'pointer' }}>
        <div className="card-body">
          <h5 className="card-title">Title: {suggestion.title}</h5>
          <p className="card-text">Votes: {suggestion.votes}</p>
        </div>
      </div>
      <UpVoteModal 
        showModal={showModal} 
        handleClose={handleClose} 
        suggestion={suggestion} 
        handleUpvote={handleUpvote} 
      />
    </>
  );
};
export default SuggestionItem;
