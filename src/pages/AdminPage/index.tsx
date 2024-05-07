import { Container, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Header from '../../components/feature/Header';
import ServiceCard from '../HomePage/components/ServiceCard';
import usersImage from '../../images/users.jpg';
import inventoryImage from '../../images/inventory.jpg';
import weeklySchedule from '../../images/schedule.jpg';
import registrationMembers from '../../images/registration_member.jpg';
import personalTrainingImage from '../../images/coming_client.jpg';
import NewUserDialog from './components/NewUserDialog';
import UsersInformation from './components/UsersInformation';
import InventoryManagement from '../../components/feature/InventoryManagement';
import WeeklySchedule from './components/WeeklySchedule';
import UserVisit from '../../components/feature/UserVisit';

const AdminPAge = () => {
  const [isCreateNewUser, setCreateNewUser] = useState<boolean>(false);
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
                image={usersImage}
                onCardClick={() => setCardIndex(0)}
                title="Информация о пользователях"
                width="260px"
              />
              <ServiceCard
                image={registrationMembers}
                onCardClick={() => setCreateNewUser(true)}
                title="Регистрация пользователей"
                width="260px"
              />
              <ServiceCard
                image={inventoryImage}
                onCardClick={() => setCardIndex(2)}
                title="Управление инвентарём"
                width="260px"
              />
              <ServiceCard
                image={personalTrainingImage}
                onCardClick={() => setCardIndex(3)}
                title="Регистрация посещения"
                width="260px"
              />
              <ServiceCard
                image={weeklySchedule}
                onCardClick={() => setCardIndex(4)}
                title="Расписание на неделю"
                width="260px"
              />
            </Stack>
            {cardIndex === 0 && <UsersInformation />}
            {cardIndex === 2 && <InventoryManagement />}
            {cardIndex === 3 && <UserVisit />}
            {cardIndex === 4 && <WeeklySchedule />}
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
