import { createSlice } from "@reduxjs/toolkit";

export const theme = createSlice({
  name: "theme",
  initialState: {
    darkMode: true
  },
  reducers: {
    toggleMode: state => {
      state.darkMode = !state.darkMode;
    }
  }
});

// Action creators are generated for each case reducer function
export const { toggleMode } = theme.actions;

export default theme.reducer;