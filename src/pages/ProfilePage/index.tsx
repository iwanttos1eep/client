import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import Header from '../../components/feature/Header';
import { stringAvatar } from '../../utils/stringAvatar';

const ProfilePage = () => {
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
          <Card>
            <CardHeader
              sx={{ alignItems: 'flex-start', gap: '2rem' }}
              avatar={
                <Avatar
                  sx={{
                    ...stringAvatar('Никита Русаков').sx,
                    width: '270px',
                    height: '270px',
                  }}
                />
              }
              title={
                <>
                  <Typography variant="h3">Никита Русаков</Typography>
                </>
              }
              subheader={
                <Stack gap="0.5rem">
                  <Typography>Последний визит: Сентябрь 14, 2016</Typography>
                  <Typography>rusakov@mail.ru</Typography>
                  <Typography>Роль: Пользователь</Typography>
                  <Typography>
                    Абонемент: Безлимитная карта на 3 месяца
                  </Typography>
                  <Typography>Взятый инвентарь: Полотенце</Typography>
                </Stack>
              }
            />
          </Card>
        </Container>
      </Stack>
    </Stack>
  );
};

export default ProfilePage;
