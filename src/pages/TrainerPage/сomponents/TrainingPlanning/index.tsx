import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import _ from 'lodash';
import TrainingRow from './components/TrainingRow';
import TabPanel from '../../../../components/core/TabPanel';
import UserCard from '../../../../components/feature/UserCard';
import { useAppSelector } from '../../../../hooks/store';
import { selectAuth } from '../../../../store/slice/authSlice';
import { useGetUserByIdQuery } from '../../../../store/api/userApi';
import { useGetTrainingsByTrainerIdQuery } from '../../../../store/api/trainingApi';
import { stringAvatar } from '../../../../utils/stringAvatar';
import { Delete } from '@mui/icons-material';

const TrainingPlanning = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [isExpandUsers, setExpandUsers] = useState<boolean>(false);
  const userAuthData = useAppSelector(selectAuth);
  const {
    data: trainer,
    isError: isUserErrorQuery,
    isSuccess: isUserSuccessQuery,
  } = useGetUserByIdQuery({
    userId: userAuthData.id ?? 0,
    token: userAuthData.token ?? '',
  });

  const { data: trainings } = useGetTrainingsByTrainerIdQuery(
    {
      trainerId: trainer?.id ?? 0,
      token: userAuthData.token ?? '',
    },
    {
      skip: !userAuthData.token && !trainer?.id,
    },
  );
  const role = trainer?.roles ? trainer?.roles[0] : undefined;

  const rows = [
    {
      name: 'Full Body',
      date: new Date().toLocaleString(),
      users: ['Никита Русаков', 'Хуснуриялов Булат'],
    },
    {
      name: 'Super Strong',
      date: new Date().toLocaleString(),
      users: [
        'Никита Русаков',
        'Хуснуриялов Булат',
        'Кашапов Руслан',
        'Галлямов Вадим',
        'Рубен Малаев',
      ],
    },
    {
      name: 'Stretch',
      date: new Date().toLocaleString(),
      users: [
        'Никита Русаков',
        'Хуснуриялов Булат',
        'Кашапов Руслан',
        'Галлямов Вадим',
        'Рубен Малаев',
      ],
    },
  ];

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Планирование тренировок
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tabIndex}
          onChange={(_, index) => setTabIndex(index)}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Групповые тренировки" />
        </Tabs>
        <TabPanel value={tabIndex} index={0}>
          <Stack width="100%" height="100%">
            <TableContainer component={Paper}>
              <Table aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }} align="left">
                      Дата
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="right">
                      Пользователь
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {trainings?.map((training) => (
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
                        {training.date
                          ? new Date(training.date).toLocaleDateString(
                              'ru-RU',
                              {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                              },
                            )
                          : ''}
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
          </Stack>
        </TabPanel>
      </Box>
    </>
  );
};

export default TrainingPlanning;
