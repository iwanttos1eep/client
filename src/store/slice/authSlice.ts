import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthLoginResponse } from '../../interfaces/auth';
import { RootState } from '..';

const initialState: IAuthLoginResponse = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserToLocalStorage: (
      state,
      action: PayloadAction<IAuthLoginResponse>,
    ) => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          ...action.payload,
        }),
      );
      state = action.payload;
    },
  },
});

export const selectAuth = (state: RootState) => state.authApi;
export const { setUserToLocalStorage } = authSlice.actions;
export default authSlice.reducer;
