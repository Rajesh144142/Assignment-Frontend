import { createSlice } from '@reduxjs/toolkit';

const responseSlice = createSlice({
  name: 'response',
  initialState: {
    message: null,
    type: ''
  },
  reducers: {
    setResponse: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    clearResponse: (state) => {
      state.message = null;
      state.type = '';
    },
  },
});

export const { setResponse, clearResponse } = responseSlice.actions;
export default responseSlice.reducer;
