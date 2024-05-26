import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAuthLoginRequest, IAuthLoginResponse } from '../../interfaces/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/',
  }),
  endpoints: (builder) => ({
    userLogin: builder.mutation<IAuthLoginResponse, IAuthLoginRequest>({
      query: (body) => {
        return {
          url: '/auth/signin',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
