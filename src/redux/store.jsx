import { configureStore } from '@reduxjs/toolkit';
import suggestionReducer from './suggestionSlice';
import errorReducer from './errorSlice'; // Import the error slice

const store = configureStore({
  reducer: {
    suggestions: suggestionReducer,
    error: errorReducer, // Add the error slice to the store
  },
});

export default store;
