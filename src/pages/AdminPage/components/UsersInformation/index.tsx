import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import UserCard from '../../../../components/feature/UserCard';
import NewUserDialog from './components/NewUserDialog';
import { Search } from '@mui/icons-material';

const UsersInformation = () => {
  const [isCreateNewUser, setCreateNewUser] = useState<boolean>(false);

  return (
    <>
      <Stack
        direction="row"
        gap="1rem"
        width="100%"
        justifyContent="space-between"
      >
        <Typography variant="h5" fontWeight="bold">
          Пользователи
        </Typography>
        <Button variant="contained" onClick={() => setCreateNewUser(true)}>
          Новый пользователь
        </Button>
      </Stack>
      <Stack gap="1.5rem">
        <Stack direction="row" gap="1rem">
          <TextField label="Поиск" fullWidth variant="standard" />
          <Button variant="contained" color="success" endIcon={<Search />}>
            Поиск
          </Button>
        </Stack>
        <Stack bgcolor="background.paper" direction="column" gap="1.5rem">
          <UserCard userName="Русаков Никита" />
          <UserCard userName="Хуснуриялов Булат" />
          <UserCard userName="Кашапов Руслан" />
          <UserCard userName="Галлямов Вадим" />
        </Stack>
      </Stack>
      <NewUserDialog
        open={isCreateNewUser}
        onCLose={() => setCreateNewUser(false)}
      />
    </>
  );
};

export default UsersInformation;
