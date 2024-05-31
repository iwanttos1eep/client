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
      providesTags: ['updateTrainings'],
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
      invalidatesTags: ['updateTrainings'],
    }),
    deleteTraining: builder.mutation<
      void,
      { trainingId: number; token: string }
    >({
      query: ({ token, trainingId }) => ({
        url: `v1/trainings/${trainingId}`,
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ['updateTrainings'],
    }),
  }),
});

export const {
  useGetGroupTrainingsQuery,
  useLazyGetGroupTrainingsQuery,
  useCreateNewTrainingMutation,
  useDeleteTrainingMutation,
} = trainingApi;
