import { ETrainings } from '../../enums/training';
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
    createNewTraining: builder.mutation<
      ITraining,
      { trainingName: string; trainerId: number; token: string }
    >({
      query: ({ token, trainerId, trainingName }) => ({
        url: `v1/trainings?trainingName=${trainingName}&trainerId=${trainerId}`,
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
  }),
});

export const {
  useGetGroupTrainingsQuery,
  useLazyGetGroupTrainingsQuery,
  useCreateNewTrainingMutation,
} = trainingApi;
