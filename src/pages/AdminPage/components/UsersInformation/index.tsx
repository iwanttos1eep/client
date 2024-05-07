import { Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import UserCard from '../../../../components/feature/UserCard';

const UsersInformation = () => {
  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Пользователи
      </Typography>
      <Stack gap="1.5rem">
        <TextField label="Поиск" variant="standard" />
        <Stack bgcolor="background.paper" direction="column" gap="1.5rem">
          <UserCard userName="Русаков Никита" />
          <UserCard userName="Хуснуриялов Булат" />
          <UserCard userName="Кашапов Руслан" />
          <UserCard userName="Галлямов Вадим" />
        </Stack>
      </Stack>
    </>
  );
};

export default UsersInformation;
