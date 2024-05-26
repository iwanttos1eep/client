import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISubscription } from '../../interfaces/subscription';
import { IUser } from '../../interfaces/user';

export const subscriptionApi = createApi({
  reducerPath: 'subscriptionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
  }),
  endpoints: (builder) => ({
    getSubscriptions: builder.query<ISubscription[], string>({
      query: (token) => ({
        url: `subscriptions`,
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
    addUserToSubscription: builder.mutation<
      IUser,
      { subscriptionId: number; userId: number; token: string }
    >({
      query: (data) => {
        return {
          url: `/users/${data.userId}/add-subscription?subscriptionId=${data.subscriptionId}`,
          method: 'PUT',
          headers: { Authorization: `Bearer ${data.token}` },
        };
      },
    }),
  }),
});

export const {
  useGetSubscriptionsQuery,
  useLazyGetSubscriptionsQuery,
  useAddUserToSubscriptionMutation,
} = subscriptionApi;
