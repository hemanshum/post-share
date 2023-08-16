import { createAsyncThunk } from '@reduxjs/toolkit';
import Parse from 'parse/react-native.js';

const loginUser = createAsyncThunk('user/login', async (user) => {
  const userDetails = await Parse.User.logIn(user.username, user.password);

  return {
    username: userDetails.get('username'),
    token: userDetails.get('sessionToken'),
  };
});

const signup = createAsyncThunk('user/signup', async (user) => {
  const userCreate = new Parse.User();

  const userObj = {
    username: user.username,
    password: user.password,
  };

  const userDetails = await userCreate.signUp(userObj);

  return {
    username: userDetails.get('username'),
    token: userDetails.get('sessionToken'),
  };
});

const logout = createAsyncThunk('user/logout', async () => {
  await Parse.User.logOut();

  return {};
});

export { loginUser, signup, logout };
