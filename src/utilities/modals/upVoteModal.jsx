import { Modal, Button } from 'react-bootstrap';
const upVoteModal = ({showModal,handleClose,suggestion,handleUpvote})=>{
    return (
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
    )
}
export default upVoteModal;