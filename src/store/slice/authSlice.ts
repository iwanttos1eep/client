import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthLoginResponse } from '../../interfaces/auth';
import { RootState } from '..';

const initialState: IAuthLoginResponse = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuthLoginResponse>) => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          ...action.payload,
        }),
      );
      state = action.payload;
    },
    logOut: (state) => {
      localStorage.clear();
      state = {};
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
