import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Header from '../../components/feature/Header';
import ServiceCard from '../HomePage/components/ServiceCard';
import usersImage from '../../images/users.jpg';
import inventoryImage from '../../images/inventory.jpg';
import UserCard from './components/UserCard';
import NewUserDialog from './components/NewUserDialog';

const AdminPAge = () => {
  const [isCreateNewUser, setCreateNewUser] = useState<boolean>(false);

  return (
    <Stack>
      <Header
        headerLogo={{
          title: 'Главная',
          onClick() {},
        }}
        navItems={[
          {
            title: 'О нас',
            onClick() {},
          },
          {
            title: 'Мой профиль',
            onClick() {},
          },
          {
            title: 'выйти',
            onClick() {},
          },
        ]}
      />
      <Stack marginTop="1rem">
        <Container>
          <Stack gap="1rem">
            <Typography variant="h5" fontWeight="bold">
              Виды услуг и направления
            </Typography>
            <Stack direction="row" gap="1rem" justifyContent="space-between">
              <ServiceCard
                image={usersImage}
                onCardClick={() => {}}
                title="Информация о пользователях"
                width="260px"
              />
              <ServiceCard
                image={'groupTrainingImage'}
                onCardClick={() => setCreateNewUser(true)}
                title="Регистрация пользователей"
                width="260px"
              />
              <ServiceCard
                image={inventoryImage}
                onCardClick={() => {}}
                title="Управление инвентарём"
                width="260px"
              />
              <ServiceCard
                image={'personalTrainingImage'}
                onCardClick={() => {}}
                title="Регистрация посещения"
                width="260px"
              />
            </Stack>

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
          </Stack>
        </Container>
      </Stack>
      <NewUserDialog
        open={isCreateNewUser}
        onCLose={() => setCreateNewUser(false)}
      />
    </Stack>
  );
};

export default AdminPAge;
