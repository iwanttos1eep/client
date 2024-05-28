import {
  Alert,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import { stringAvatar } from '../../utils/stringAvatar';
import Footer from '../../components/feature/Footer';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { logOut, selectAuth } from '../../store/slice/authSlice';
import { useGetUserByIdQuery } from '../../store/api/userApi';
import { useNavigate } from 'react-router-dom';
import { ERoles } from '../../interfaces/roles';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userAuthData = useAppSelector(selectAuth);
  const {
    data: user,
    isError: isUserErrorQuery,
    isSuccess: isUserSuccessQuery,
  } = useGetUserByIdQuery({
    userId: userAuthData.id ?? 0,
    token: userAuthData.token ?? '',
  });
  const role = user?.roles ? user?.roles[0] : undefined;
  const [isUserError, setUserError] = useState<boolean>(false);
  const [isUserSuccess, setUserSuccess] = useState<boolean>(false);

  useEffect(() => {
    setUserError(isUserErrorQuery);
  }, [isUserErrorQuery]);

  useEffect(() => {
    setUserSuccess(isUserSuccessQuery);
  }, [isUserSuccessQuery]);

  useEffect(() => {
    if (isUserError) {
      navigate('/login');
    }
  }, [isUserError]);

  return (
    <Stack>
      <Header
        headerLogo={{
          title: 'Главная',
          onClick() {
            if (role?.name === ERoles.ROLE_USER) {
              navigate('/');
            } else if (role?.name === ERoles.ROLE_ADMIN) {
              navigate('/admin');
            } else navigate('/trainer');
          },
        }}
        navItems={[
          {
            title: 'О нас',
            onClick() {
              navigate('/about');
            },
          },
          {
            title: 'Мой профиль',
            onClick() {
              navigate('/profile');
            },
          },
          {
            title: 'выйти',
            onClick() {
              dispatch(logOut());
              navigate('/login');
            },
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
                  <Typography>Абонемент: {user?.subscription?.name}</Typography>
                  <Typography>
                    Взятый инвентарь:{' '}
                    {user?.inventoryList?.map((inventory) => (
                      <span key={inventory.id}>{inventory.name}</span>
                    ))}
                  </Typography>
                </Stack>
              }
            />
          </Card>
        </Container>
      </Stack>
      <Footer />
      <Snackbar
        open={isUserError}
        autoHideDuration={3000}
        onClose={() => {
          setUserError(false);
        }}
      >
        <Alert severity="error" variant="filled">
          Ошибка
        </Alert>
      </Snackbar>
      <Snackbar
        open={isUserSuccess}
        autoHideDuration={3000}
        onClose={() => {
          setUserSuccess(false);
        }}
      >
        <Alert severity="success" variant="filled">
          Успех!
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default ProfilePage;
