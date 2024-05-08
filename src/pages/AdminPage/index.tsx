import { Container, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Header from '../../components/feature/Header';
import ServiceCard from '../../components/feature/ServiceCard';
import usersImage from '../../images/users.jpg';
import inventoryImage from '../../images/inventory.jpg';
import weeklySchedule from '../../images/schedule.jpg';
import personalTrainingImage from '../../images/coming_client.jpg';
import UsersInformation from './components/UsersInformation';
import InventoryManagement from '../../components/feature/InventoryManagement';
import WeeklySchedule from './components/WeeklySchedule';
import UserVisit from '../../components/feature/UserVisit';

const AdminPAge = () => {
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
            <Stack direction="row" gap="1rem" justifyContent="space-between">
              <ServiceCard
                image={usersImage}
                onCardClick={() => setCardIndex(0)}
                title="Пользователи"
                width="260px"
                selected={cardIndex === 0}
              />
              <ServiceCard
                image={inventoryImage}
                onCardClick={() => setCardIndex(1)}
                title="Управление инвентарём"
                width="260px"
                selected={cardIndex === 1}
              />
              <ServiceCard
                image={personalTrainingImage}
                onCardClick={() => setCardIndex(2)}
                title="Регистрация посещения"
                width="260px"
                selected={cardIndex === 2}
              />
              <ServiceCard
                image={weeklySchedule}
                onCardClick={() => setCardIndex(3)}
                title="Расписание на неделю"
                width="260px"
                selected={cardIndex === 3}
              />
            </Stack>
            {cardIndex === 0 && <UsersInformation />}
            {cardIndex === 1 && <InventoryManagement />}
            {cardIndex === 2 && <UserVisit />}
            {cardIndex === 3 && <WeeklySchedule />}
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default AdminPAge;
