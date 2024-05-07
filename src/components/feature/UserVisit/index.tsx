import React, { useState } from 'react';
import VisitRegistrationDialog from './components/VisitRegistrationDialog';
import { Button, Typography } from '@mui/material';
import UserCard from '../UserCard';

const UserVisit = () => {
  const [isVisitRegistration, setVisitRegistration] = useState<boolean>(false);

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Вошедшие пользователи
      </Typography>
      <Button variant="contained" onClick={() => setVisitRegistration(true)}>
        Регистрация
      </Button>
      <UserCard userName="Русаков Никита" />
      <UserCard userName="Хуснуриялов Булат" />
      <UserCard userName="Кашапов Руслан" />
      <UserCard userName="Галлямов Вадим" />
      <VisitRegistrationDialog
        open={isVisitRegistration}
        onCLose={() => setVisitRegistration(false)}
      />
    </>
  );
};

export default UserVisit;
