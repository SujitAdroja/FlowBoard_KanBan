import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../feature/login";
// import boardReducer from "../feature/createBoard";
export default configureStore({
  reducer: {
    login: loginReducer,
    // board: boardReducer,
  },
});
