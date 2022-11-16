const { configureStore } = require("@reduxjs/toolkit");
import { userDataReducer } from "./userDataSlice";

export const store = configureStore({
  reducer: {
    users: userDataReducer
  }
})