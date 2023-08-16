import { createSlice } from '@reduxjs/toolkit';

import { loginUser, signup, logout } from '../thunks/authThunk';

const initialState = {
  username: null,
  userDetails: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isError: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError(state) {
      state.isError = false;
      state.error = null;
    },
  },

  extraReducers(builder) {
    // LOGIN
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.isError = false;
      state.username = action.payload.username;
      state.userDetails = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    // SIGNUP
    builder.addCase(signup.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.isError = false;
      state.username = action.payload.username;
      state.userDetails = action.payload;
      state.error = null;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    // LOGOUT
    builder.addCase(logout.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.username = null;
      state.userDetails = null;
      state.error = null;
      state.isError = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export const { clearError } = authSlice.actions;
export const userReducer = authSlice.reducer;
