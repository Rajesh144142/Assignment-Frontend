import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSuggestions } from "../redux/suggestionSlice"; 
import SuggestionItem from "./SuggestionItem";
import { ThreeDots } from 'react-loader-spinner'; 

const SuggestionList = () => {
  const dispatch = useDispatch();
  const { suggestions, loading, error } = useSelector((state) => state.suggestions);

  useEffect(() => {
    dispatch(fetchSuggestions());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <ThreeDots
          visible={loading}
          height="80"
          width="80"
          radius="9"
          color="#007bff" 
          ariaLabel="three-dots-loading"
        />
        <p className="mt-3">Loading suggestions...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center mt-4">
        <p>Failed to load suggestions. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      {suggestions.length === 0 ? (
        <p>No suggestions available. Be the first to add one!</p>
      ) : (
        suggestions.map((suggestion) => (
          <SuggestionItem key={suggestion?.id} suggestion={suggestion} />
        ))
      )}
    </div>
  );
};

export default SuggestionList;
