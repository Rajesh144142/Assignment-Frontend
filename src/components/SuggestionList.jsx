import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSuggestions } from "../redux/suggestionSlice"; // Import the fetchSuggestions action
import SuggestionItem from "./SuggestionItem";

 const SuggestionList = () => {
  const dispatch = useDispatch();
  const suggestions = useSelector((state) => state.suggestions.suggestions);

  useEffect(() => {
    // Fetch suggestions when the component mounts
    dispatch(fetchSuggestions());
  }, [dispatch]);

  return (
    <div className="mt-4">
      {suggestions.length === 0 ? (
        <p>No suggestions available. Be the first to add one!</p>
      ) : (
        suggestions.map((suggestion) => (
          <SuggestionItem key={suggestion.id} suggestion={suggestion} />
        ))
      )}
    </div>
  );
};
export default SuggestionList;