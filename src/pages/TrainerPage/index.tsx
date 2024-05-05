import React, { useState } from 'react';
import Header from '../../components/feature/Header';
import { Box, Container, Stack, Tab, Tabs, Typography } from '@mui/material';
import groupTrainingImage from '../../images/group_training_sessions.jpg';
import personalTrainingImage from '../../images/personal_training_sessions.jpg';
import gymInventory from '../../images/gym_inventory.jpg'
import infoAboutVisitors from '../../images/info_about_visitors.jpg'
import TabPanel from '../../components/core/TabPanel';
import ServiceCard from './сomponents/ServiceCard';
import SubscriptionTab from './сomponents/SubscriptionTab';


const TrainerPage = () => {
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
                image={infoAboutVisitors}
                onCardClick={() => {}}
                title="Информация о клиентах"
                subTitle=""
              />
              <ServiceCard
                image={groupTrainingImage}
                onCardClick={() => {}}
                title="Регистрация посещений"
                subTitle=""
              />
              <ServiceCard
                image={personalTrainingImage}
                onCardClick={() => {}}
                title="Планирование тренировок"
                subTitle=""
              />
              <ServiceCard
                image={gymInventory}
                onCardClick={() => {}}
                title="Управление инвентарём"
                subTitle=""
              />
            </Stack>

            <Typography variant="h5" fontWeight="bold">
              Расписание занятий
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
                <Tab label="12:00" />
                <Tab label="14:00" />
                <Tab label="16:00" />
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

export default TrainerPage;
