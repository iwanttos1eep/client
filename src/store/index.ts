import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { authApi } from './api/authApi';
import authReducer from './slice/authSlice';
import { userApi } from './api/userApi';
import { subscriptionApi } from './api/subscription';

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [subscriptionApi.reducerPath]: subscriptionApi.reducer,
  auth: authReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(userApi.middleware)
        .concat(subscriptionApi.middleware),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
