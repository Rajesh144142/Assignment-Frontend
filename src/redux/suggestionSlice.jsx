
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import host from "../configuration/apiConfig";
import { setError } from './errorSlice'; // Import the setError action

export const fetchSuggestions = createAsyncThunk(
  "suggestions/fetchSuggestions",
  async (_, { dispatch }) => {
    try {
      const response = await axios.get(`${host}/api/v1/suggestions/`);
      return response.data;
    } catch (error) {
      dispatch(setError(error.response?.data?.error || 'Failed to fetch suggestions'));
      throw error; // Rethrow to propagate the error
    }
  }
);

export const addNewSuggestion = createAsyncThunk(
  "suggestions/addNewSuggestion",
  async (newSuggestion, { dispatch }) => {
    try {
      const response = await axios.post(`${host}/api/v1/suggestions/`, newSuggestion);
      return response.data;
    } catch (error) {
      dispatch(setError(error.response?.data?.error || 'Failed to add new suggestion'));
      throw error; // Rethrow to propagate the error
    }
  }
);

export const upvoteSuggestion = createAsyncThunk(
  "suggestions/upvoteSuggestion",
  async (id, { dispatch }) => {
    try {
      const response = await axios.post(`${host}/api/v1/suggestions/${id}/vote`);
      return response.data;
    } catch (error) {
      dispatch(setError(error.response?.data?.error || 'Failed to upvote suggestion'));
      throw error; // Rethrow to propagate the error
    }
  }
);

// ... (rest of the slice)


const suggestionSlice = createSlice({
  name: "suggestions",
  initialState: {
    suggestions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuggestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSuggestions.fulfilled, (state, action) => {
        state.loading = false;
        state.suggestions = action.payload;
      })
      .addCase(fetchSuggestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addNewSuggestion.fulfilled, (state, action) => {
        state.suggestions.push(action.payload);
        state.suggestions.sort((a, b) => b.votes - a.votes);
      })
      .addCase(upvoteSuggestion.fulfilled, (state, action) => {
        const updatedSuggestion = action.payload;
        const existingSuggestionIndex = state.suggestions.findIndex(
          (item) => item.id === updatedSuggestion.id
        );
      
        if (existingSuggestionIndex >= 0) {
          state.suggestions[existingSuggestionIndex].votes = updatedSuggestion.votes;
          
          state.suggestions.sort((a, b) => b.votes - a.votes);
        }
      });
      
      
  },
});

export default suggestionSlice.reducer;
