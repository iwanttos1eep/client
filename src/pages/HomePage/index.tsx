import React, { useState } from 'react';
import Header from '../../components/feature/Header';
import { Box, Container, Stack, Tab, Tabs, Typography } from '@mui/material';
import buySubscriptionImage from '../../images/buy_subscription.jpg';
import groupTrainingImage from '../../images/group_training_sessions.jpg';
import personalTrainingImage from '../../images/personal_training_sessions.jpg';
import TabPanel from '../../components/core/TabPanel';
import ServiceCard from './components/ServiceCard';
import SubscriptionTab from './components/SubscriptionTab';

const HomePage = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

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
                image={buySubscriptionImage}
                onCardClick={() => {}}
                title="Купить абонемент"
                subTitle="Станьте членом нашего клуба, занимайтесь на лучших
                тренировочных аппаратах"
              />
              <ServiceCard
                image={groupTrainingImage}
                onCardClick={() => {}}
                title="Групповые занятия"
                subTitle="Тренировки с единомышленниками"
              />
              <ServiceCard
                image={personalTrainingImage}
                onCardClick={() => {}}
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
    </Stack>
  );
};

export default HomePage;
