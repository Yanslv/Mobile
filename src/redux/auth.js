import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: ""
  },
  reducers: {
    setUserStore: (state, value) => {
      state.user = value;
    },
    setTokenStore: (state, value) => {
      state.token = value;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setUserStore, setTokenStore } = auth.actions;

export default auth.reducer;
