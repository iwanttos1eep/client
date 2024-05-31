import React, { useState } from 'react';
import MainDialog from '../../../../../../components/feature/MainDialog';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import {
  useGetUsersByRoleQuery,
  useGetUsersQuery,
} from '../../../../../../store/api/userApi';
import { ERoles } from '../../../../../../enums/roles';
import { useAppSelector } from '../../../../../../hooks/store';
import { selectAuth } from '../../../../../../store/slice/authSlice';

interface INewTrainingDialogProps {
  open: boolean;
  onCLose: () => void;
  onAccept: (trainingName: string, trainerId: number) => void;
}

const NewTrainingDialog = (props: INewTrainingDialogProps) => {
  const userAuthData = useAppSelector(selectAuth);

  const { onCLose, open, onAccept } = props;
  const [time, setTime] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [trainingName, setTrainingName] = useState<string>('');
  const [trainerId, setTrainerId] = useState<number>();

  const {
    data: trainers,
    isSuccess: isTrainersSuccessQuery,
    isError: isTrainersErrorQuery,
  } = useGetUsersQuery(userAuthData.token ?? '', {
    skip: !userAuthData.token,
  });

  return (
    <MainDialog
      open={open}
      dialogTitle={'Добавить в расписание'}
      onClose={() => {
        onCLose();
      }}
      onAccept={() => {
        if (!trainerId || !trainingName) return;

        onAccept(trainingName, trainerId);
      }}
      maxWidth="md"
    >
      <Stack gap="1rem" margin="1rem 0">
        <TextField
          size="small"
          label="Название тренировки"
          value={trainingName}
          onChange={(e) => setTrainingName(e.target.value)}
        />

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label" size="small">
            Тренер
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={trainerId}
            label="Тренер"
            onChange={(event) => setTrainerId(event.target.value as number)}
            size="small"
          >
            {trainers?.map((trainer) => (
              <MenuItem value={trainer.id}>{trainer.username}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </MainDialog>
  );
};

export default NewTrainingDialog;
