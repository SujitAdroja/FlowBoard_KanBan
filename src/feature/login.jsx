import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: false,
  },
  reducers: {
    Login: (state) => {
      state.value = true;
      localStorage.setItem("login", true);
    },
    Logout: (state) => {
      state.value = false;
      localStorage.setItem("login", false);
    },
  },
});

// Action creators are generated for each case reducer function
export const { Login, Logout } = loginSlice.actions;

export default loginSlice.reducer;
