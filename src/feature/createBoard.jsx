// import { createSlice } from "@reduxjs/toolkit";
// import { data } from "../data";

// export const boardSlice = createSlice({
//   name: "board",
//   initialState: {
//     value: data,
//   },
//   reducers: {
//     add: (state, action) => {
//       console.log(action);
//       if (action.type === "newBoard") {
//         const item = JSON.parse(localStorage.getItem("data"));
//         console.log(item);
//         console.log(action.payload, action.type);
//         return { ...state, value: state.value.push(action.payload) };
//       }
//     },
//     update: (state) => {
//       state.value = false;
//       localStorage.setItem("login", false);
//     },
//     delete: (state) => {
//       state.value = false;
//       localStorage.setItem("login", false);
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { add, update } = boardSlice.actions;

// export default boardSlice.reducer;
