import React, { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import { Box, Container, Stack, Tab, Tabs, Typography } from '@mui/material';
import buySubscriptionImage from '../../images/buy_subscription.jpg';
import groupTrainingImage from '../../images/group_training_sessions.jpg';
import personalTrainingImage from '../../images/personal_training_sessions.jpg';
import TabPanel from '../../components/core/TabPanel';
import ServiceCard from '../../components/feature/ServiceCard';
import SubscriptionTab from './components/SubscriptionTab';
import SubscriptionDialog from './components/SubscriptionDialog';
import GroupSessionDialog from './components/GroupSessionDialog';
import PersonalSessionDialog from './components/PersonalSessionDialog';
import Footer from '../../components/feature/Footer';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { logOut, selectAuth } from '../../store/slice/authSlice';
import { useNavigate } from 'react-router-dom';
import { useGetUserByIdQuery } from '../../store/api/userApi';

const HomePage = () => {
  const navigate = useNavigate();
  const userAuthData = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const { data: user } = useGetUserByIdQuery(
    { userId: userAuthData.id ?? 0, token: userAuthData.token ?? '' },
    {
      skip: !userAuthData.id && !userAuthData.token,
    },
  );

  console.log(user);

  const [tabIndex, setTabIndex] = useState<number>(0);
  const [isOpenSubscriptionDialog, setOpenSubscriptionDialog] =
    useState<boolean>(false);
  const [isOpenGroupSessionDialog, setOpenGroupSessionDialog] =
    useState<boolean>(false);
  const [isOpenPersonalSessionDialog, setOpenPersonalSessionDialog] =
    useState<boolean>(false);

  const logOutHandler = () => {
    dispatch(logOut());
    navigate('/login');
  };

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
            onClick: logOutHandler,
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
                image={buySubscriptionImage}
                onCardClick={() => setOpenSubscriptionDialog(true)}
                title="Купить абонемент"
                subTitle="Станьте членом нашего клуба, занимайтесь на лучших
                тренировочных аппаратах"
              />
              <ServiceCard
                image={groupTrainingImage}
                onCardClick={() => setOpenGroupSessionDialog(true)}
                title="Групповые занятия"
                subTitle="Тренировки с единомышленниками"
              />
              <ServiceCard
                image={personalTrainingImage}
                onCardClick={() => setOpenPersonalSessionDialog(true)}
                title="Персональные тренировки"
                subTitle="Станьте сильнее с нашими специалистами"
              />
            </Stack>

            <Typography variant="h5" fontWeight="bold">
              Прайс-лист
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
                <Tab label="КУПИТЬ АБОНЕМЕНТ" />
                <Tab label="ГРУППОВЫЕ ЗАНЯТИЯ" />
                <Tab label="ПЕРСОНАЛЬНЫЕ ТРЕНИРОВКИ" />
              </Tabs>
              <TabPanel value={tabIndex} index={0}>
                <SubscriptionTab />
              </TabPanel>
              <TabPanel value={tabIndex} index={1}>
                <SubscriptionTab />
              </TabPanel>
              <TabPanel value={tabIndex} index={2}>
                <SubscriptionTab />
              </TabPanel>
            </Box>
          </Stack>
        </Container>
      </Stack>
      <SubscriptionDialog
        open={isOpenSubscriptionDialog}
        onCLose={() => setOpenSubscriptionDialog(false)}
      />
      <GroupSessionDialog
        open={isOpenGroupSessionDialog}
        onCLose={() => setOpenGroupSessionDialog(false)}
      />
      <PersonalSessionDialog
        onCLose={() => setOpenPersonalSessionDialog(false)}
        open={isOpenPersonalSessionDialog}
      />
      <Footer />
    </Stack>
  );
};

export default HomePage;
