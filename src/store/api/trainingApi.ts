import { ITraining } from '../../interfaces/training';
import { commonApi } from './commonApi';

export const trainingApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getGroupTrainings: builder.query<ITraining[], string>({
      query: (token) => ({
        url: `v1/trainings/group`,
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
  }),
});

export const { useGetGroupTrainingsQuery, useLazyGetGroupTrainingsQuery } =
  trainingApi;
