import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserReducerInitialState } from "../../Types/reducer-types";
import { User } from "../../Types/Types";

const initialState: UserReducerInitialState = {
  user: {
    name: "",
    email: "",
    photo: "",
    gender: "",
    role: "",
    dob: "",
    _id: "",
  },
  loading: true,
};

export const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    userExist: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    userNotExist: (state) => {
      state.loading = false;
      state.user = {
        name: "",
        email: "",
        photo: "",
        gender: "",
        role: "",
        dob: "",
        _id: "",
      };
    },
  },
});

export const { userExist, userNotExist } = userReducer.actions;
