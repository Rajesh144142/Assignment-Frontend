import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewSuggestion } from "../redux/suggestionSlice";
import { Button, Form } from "react-bootstrap";

export const SuggestionForm = ({ closeModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      dispatch(addNewSuggestion({ title, description }));
      setTitle("");
      setDescription("");
      closeModal();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Suggestion Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
