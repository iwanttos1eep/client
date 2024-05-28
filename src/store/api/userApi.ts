import { IUser } from '../../interfaces/user';
import { ERoles } from '../../interfaces/roles';
import { commonApi } from './commonApi';
import { EStatuses } from '../../interfaces/statuses';

export const userApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserById: builder.query<IUser, { userId: number; token: string }>({
      query: (data) => ({
        url: `v1/users/${data.userId}`,
        method: 'GET',
        headers: { Authorization: `Bearer ${data.token}` },
      }),
      providesTags: ['updateUser'],
    }),
    getUsers: builder.query<IUser[], string>({
      query: (token) => ({
        url: `v1/users`,
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ['updateUserList'],
    }),
    getUsersByUsername: builder.query<
      IUser[],
      { username: string; token: string }
    >({
      query: (data) => ({
        url: `v1/users/search?name=${data.username}`,
        method: 'GET',
        headers: { Authorization: `Bearer ${data.token}` },
      }),
      providesTags: ['updateUser'],
    }),
    updateUserStatus: builder.mutation<
      boolean,
      { userId: number; status: EStatuses; token: string }
    >({
      query: ({ status, token, userId }) => ({
        url: `v1/users/${userId}/update-status?status=${status}`,
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ['updateUserList'],
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
  useGetUsersByUsernameQuery,
  useLazyGetUsersByUsernameQuery,
  useUpdateUserStatusMutation,
} = userApi;
