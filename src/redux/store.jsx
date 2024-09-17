import { configureStore } from '@reduxjs/toolkit';
import suggestionReducer from './suggestionSlice';
import responseReducer from './responseSlice'; 

const store = configureStore({
  reducer: {
    suggestions: suggestionReducer,
    response: responseReducer, 
  },
});

export default store;
