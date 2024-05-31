import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import NewScheduleDialog from './components/NewScheduleDialog';
import { useAppSelector } from '../../../../hooks/store';
import { selectAuth } from '../../../../store/slice/authSlice';
import {
  useCreateNewTrainingMutation,
  useGetGroupTrainingsQuery,
} from '../../../../store/api/trainingApi';
import UserCard from '../../../../components/feature/UserCard';
import { stringAvatar } from '../../../../utils/stringAvatar';
import NewTrainingDialog from './components/NewTrainingDialog';

const WeeklySchedule = () => {
  const [isAddSchedule, setAddSchedule] = useState<boolean>(false);
  const [isExpandUsers, setExpandUsers] = useState<boolean>(false);
  const [isAddTraining, setAddTraining] = useState<boolean>(false);

  const userAuthData = useAppSelector(selectAuth);
  const {
    data: trainings,
    isError: isTrainingsErrorQuery,
    isSuccess: isTrainingsSuccessQuery,
  } = useGetGroupTrainingsQuery(userAuthData.token ?? '', {
    skip: !userAuthData.token,
  });

  const [
    createNewTraining,
    { isError: isCreateErrorQuery, isSuccess: isCreateSuccessQuery },
  ] = useCreateNewTrainingMutation();

  const createNewTrainingHandler = (
    trainingName: string,
    trainerId: number,
  ) => {
    if (!userAuthData.token) return;

    createNewTraining({
      trainerId,
      trainingName,
      token: userAuthData.token,
    });
  };

  return (
    <>
      <Stack direction="row" gap="1rem" justifyContent="space-between">
        <Typography variant="h5" fontWeight="bold">
          Расписание на неделю
        </Typography>
        <Stack direction="row" gap="1rem">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setAddTraining(true)}
          >
            Добавить тренировку
          </Button>
          <Button variant="contained" onClick={() => setAddSchedule(true)}>
            Добавить в расписание
          </Button>
        </Stack>
      </Stack>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Занятие</TableCell>
                <TableCell align="center">Тренер</TableCell>
                <TableCell align="center">Время</TableCell>
                <TableCell align="right">Кто придёт</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trainings?.map((training, index) => (
                <TableRow
                  key={training.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell width={'25%'} align="left">
                    {training.name}
                  </TableCell>
                  <TableCell width={'25%'} align="center">
                    {training.trainer?.username}
                  </TableCell>
                  <TableCell width={'25%'} align="center">
                    {training.date?.toDateString()}
                  </TableCell>
                  <TableCell width={'25%'} align="right">
                    {isExpandUsers ? (
                      <Stack
                        bgcolor="background.paper"
                        direction="column"
                        gap="1.5rem"
                      >
                        <Button onClick={() => setExpandUsers(false)}>
                          Свернуть
                        </Button>
                        {training?.users?.map((user) => (
                          <UserCard user={user} />
                        ))}
                      </Stack>
                    ) : (
                      <AvatarGroup
                        max={3}
                        onClick={() => setExpandUsers(true)}
                        sx={{
                          cursor: 'pointer',
                          '.MuiAvatar-root:hover': {
                            background: 'red',
                          },
                        }}
                      >
                        {training?.users?.map((user) => (
                          <Avatar
                            key={user.id}
                            {...stringAvatar(user.username)}
                          />
                        ))}
                      </AvatarGroup>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <NewScheduleDialog
          open={isAddSchedule}
          onCLose={() => setAddSchedule(false)}
        />
        <NewTrainingDialog
          open={isAddTraining}
          onCLose={() => setAddTraining(false)}
          onAccept={createNewTrainingHandler}
        />
      </Box>
    </>
  );
};

export default WeeklySchedule;
