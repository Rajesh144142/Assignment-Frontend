import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "./components/Header";
import SuggestionList  from "./components/SuggestionList";
import { fetchSuggestions } from "./redux/suggestionSlice";
import  ResponseModal  from "./utilities/modals/ResponseModal";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSuggestions());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <SuggestionList/>
      <ResponseModal/>
    </div>
  );
};

export default App;
