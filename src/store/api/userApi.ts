import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../../interfaces/user';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
  }),
  endpoints: (builder) => ({
    getUserById: builder.query<IUser, { userId: number; token: string }>({
      query: (data) => ({
        url: `users/${data.userId}`,
        method: 'GET',
        headers: { Authorization: `Bearer ${data.token}` },
      }),
    }),
  }),
});

export const { useGetUserByIdQuery, useLazyGetUserByIdQuery } = userApi;
