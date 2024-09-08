import { configureStore } from '@reduxjs/toolkit';
import suggestionReducer from './suggestionSlice';
import responseReducer from './responseSlice'; // Import the error slice

const store = configureStore({
  reducer: {
    suggestions: suggestionReducer,
    response: responseReducer, // Add the error slice to the store
  },
});

export default store;
