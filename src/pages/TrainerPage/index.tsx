import React, { useState } from 'react';
import Header from '../../components/feature/Header';
import { Container, Stack, Typography } from '@mui/material';
import groupTrainingImage from '../../images/group_training_sessions.jpg';
import personalTrainingImage from '../../images/personal_training_sessions.jpg';
import gymInventory from '../../images/gym_inventory.jpg';
import TrainingPlanning from './сomponents/TrainingPlanning';
import InventoryManagement from '../../components/feature/InventoryManagement';
import UserVisit from '../../components/feature/UserVisit';
import ServiceCard from '../../components/feature/ServiceCard';

const TrainerPage = () => {
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
                image={personalTrainingImage}
                onCardClick={() => setCardIndex(0)}
                title="Планирование тренировок"
                subTitle=""
                selected={cardIndex === 0}
              />
              <ServiceCard
                image={gymInventory}
                onCardClick={() => setCardIndex(1)}
                title="Управление инвентарём"
                subTitle=""
                selected={cardIndex === 1}
              />
              <ServiceCard
                image={groupTrainingImage}
                onCardClick={() => setCardIndex(2)}
                title="Регистрация посещений"
                subTitle=""
                selected={cardIndex === 2}
              />
            </Stack>
            {cardIndex === 0 && <TrainingPlanning />}
            {cardIndex === 1 && <InventoryManagement />}
            {cardIndex === 2 && <UserVisit />}
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default TrainerPage;
