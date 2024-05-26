import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../../interfaces/user';
import { ERoles } from '../../interfaces/roles';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/',
  }),
  endpoints: (builder) => ({
    getUserById: builder.query<IUser, { userId: number; token: string }>({
      query: (data) => ({
        url: `v1/users/${data.userId}`,
        method: 'GET',
        headers: { Authorization: `Bearer ${data.token}` },
      }),
    }),
    getUsers: builder.query<IUser[], string>({
      query: (token) => ({
        url: `v1/users`,
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
    createUser: builder.mutation<
      IUser,
      {
        username: string;
        firstName: string;
        lastName: string;
        email: string;
        roles?: ERoles[];
        token: string;
      }
    >({
      query: (body) => {
        return {
          url: `/auth/signup`,
          method: 'POST',
          headers: { Authorization: `Bearer ${body.token}` },
          body: { ...body, password: '12345678' },
        };
      },
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useCreateUserMutation,
} = userApi;
