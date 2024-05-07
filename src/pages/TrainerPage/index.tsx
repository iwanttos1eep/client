import React, { useState } from 'react';
import Header from '../../components/feature/Header';
import { Container, Stack, Typography } from '@mui/material';
import groupTrainingImage from '../../images/group_training_sessions.jpg';
import personalTrainingImage from '../../images/personal_training_sessions.jpg';
import gymInventory from '../../images/gym_inventory.jpg';
import infoAboutVisitors from '../../images/info_about_visitors.jpg';
import ServiceCard from './сomponents/ServiceCard';
import VisitRegistrationDialog from './сomponents/VisitRegistrationDialog';
import InventoryManagement from './сomponents/InventoryManagement';

const TrainerPage = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [isVisitRegistration, setVisitRegistration] = useState<boolean>(false);
  const [cardIndex, setCardIndex] = useState<number>(0);

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
            <Stack
              direction="row"
              gap="1rem"
              justifyContent="space-between"
              overflow="scroll"
              padding="1rem"
            >
              <ServiceCard
                image={infoAboutVisitors}
                onCardClick={() => {}}
                title="Информация о клиентах"
                subTitle=""
              />
              <ServiceCard
                image={groupTrainingImage}
                onCardClick={() => setVisitRegistration(true)}
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
                onCardClick={() => setCardIndex(3)}
                title="Управление инвентарём"
                subTitle=""
              />
            </Stack>
            {cardIndex === 3 ? <InventoryManagement /> : <></>}
            {/* <Typography variant="h5" fontWeight="bold">
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
            </Box> */}
          </Stack>
        </Container>
      </Stack>
      <VisitRegistrationDialog
        open={isVisitRegistration}
        onCLose={() => setVisitRegistration(false)}
      />
    </Stack>
  );
};

export default TrainerPage;
