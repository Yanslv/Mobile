import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme.js";
import auth from "./auth.js";

export default configureStore({
  reducer: {
    theme: theme,
    auth: auth
  }
  
});
