import { createSlice } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';

const initialState = {
  token: null,
  user: null,
  lastActiveAt: Date.now(),
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
      state.lastActiveAt = Date.now();
      SecureStore.setItemAsync('token', token);
      SecureStore.setItemAsync('user', JSON.stringify(user));
    },
    clearSession: (state) => {
      state.token = null;
      state.user = null;
      state.lastActiveAt = null;
      SecureStore.deleteItemAsync('token');
      SecureStore.deleteItemAsync('user');
    },
    updateLastActive: (state) => {
      state.lastActiveAt = Date.now();
    },
  },
});

export const { setSession, clearSession, updateLastActive } =
  sessionSlice.actions;
export default sessionSlice.reducer;
