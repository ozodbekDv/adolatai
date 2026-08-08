import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("currentUser");

const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  isAuth: !!savedUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = true;

      localStorage.setItem("currentUser", JSON.stringify(payload));
    },
    login: (state, { payload }) => {
      // const savedUser = localStorage.getItem("currentUser");

      const { phone, password } = payload;
      const user = { phone, password };

      localStorage.setItem("currentUser", JSON.stringify(user));
      state.user = user;
      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;

      localStorage.removeItem("currentUser");
    },
  },
});

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;
