import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import UserCard from '../../../../components/feature/UserCard';
import NewUserDialog from './components/NewUserDialog';
import { Search } from '@mui/icons-material';
import { useAppSelector } from '../../../../hooks/store';
import { selectAuth } from '../../../../store/slice/authSlice';
import {
  useCreateUserMutation,
  useGetUsersQuery,
} from '../../../../store/api/userApi';
import { ERoles } from '../../../../interfaces/roles';

const UsersInformation = () => {
  const [isCreateNewUser, setCreateNewUser] = useState<boolean>(false);

  const userAuthData = useAppSelector(selectAuth);
  const { data: users } = useGetUsersQuery(userAuthData.token ?? '', {
    skip: !userAuthData.id && !userAuthData.token,
  });
  const [createNewUser, { data }] = useCreateUserMutation();

  const createNewUserHandler = (obj: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    role?: ERoles;
  }) => {
    const { email, firstName, lastName, role, username } = obj;
    createNewUser({
      email,
      firstName,
      lastName,
      roles: role ? [role] : undefined,
      token: userAuthData.token ?? '',
      username,
    });
  };

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
          {users?.map((user) => <UserCard user={user} key={user.id} />)}
        </Stack>
      </Stack>
      <NewUserDialog
        open={isCreateNewUser}
        onCLose={() => setCreateNewUser(false)}
        onAccept={createNewUserHandler}
      />
    </>
  );
};

export default UsersInformation;
