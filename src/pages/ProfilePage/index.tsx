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
import Footer from '../../components/feature/Footer';
import { useAppSelector } from '../../hooks/store';
import { selectAuth } from '../../store/slice/authSlice';
import { useGetUserByIdQuery } from '../../store/api/userApi';

const ProfilePage = () => {
  const userAuthData = useAppSelector(selectAuth);
  const { data: user } = useGetUserByIdQuery(
    { userId: userAuthData.id ?? 0, token: userAuthData.token ?? '' },
    {
      skip: !userAuthData.id && !userAuthData.token,
    },
  );

  console.log(user);

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
              title={<Typography variant="h3">{user?.username}</Typography>}
              subheader={
                <Stack gap="0.5rem">
                  <Typography>
                    Последний визит:
                    {user?.enteredAt?.toString()}
                  </Typography>
                  <Typography>{user?.email}</Typography>
                  <Typography>
                    Роль:{' '}
                    {user?.roles?.map((role, index) => (
                      <span key={index}>{role.name}</span>
                    )) ?? <></>}
                  </Typography>
                  <Typography>
                    Абонемент: !!!Безлимитная карта на 3 месяца
                  </Typography>
                  <Typography>Взятый инвентарь: !!!Полотенце</Typography>
                </Stack>
              }
            />
          </Card>
        </Container>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default ProfilePage;
