import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commonApi = createApi({
  reducerPath: 'commonApi',
  tagTypes: ['updateUser'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  endpoints: () => ({}),
});
