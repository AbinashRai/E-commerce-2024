// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { UserReducerInitialState } from "../../Types/reducer-types";
// import { User } from "../../Types/Types";

// const initialState: UserReducerInitialState = {
//   user: null,
//   loading: true,
// };

// export const userReducer = createSlice({
//   name: "userReducer",
//   initialState,
//   reducers: {
//     userExist: (state, action: PayloadAction<User>) => {
//       state.loading = false;
//       state.user = action.payload;
//     },
//     userNotExist: (state) => {
//       state.loading = false;
//       state.user = null;
//     },
//   },
// });

// export const { userExist, userNotExist } = userReducer.actions;
