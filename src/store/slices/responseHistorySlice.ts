import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResponseHistoryState {
  responseHistory: string[];
}

const initialState: ResponseHistoryState = {
  responseHistory: [],
};

const responseHistorySlice = createSlice({
  name: "responseHistory",
  initialState,
  reducers: {
    addResponseToHistory: (state, action: PayloadAction<string>) => {
      state.responseHistory.push(action.payload);
    },
    clearHistory: (state) => {
      state.responseHistory = [];
    },
  },
});

export const { addResponseToHistory, clearHistory } = responseHistorySlice.actions;
export default responseHistorySlice.reducer;