import React from 'react';
import Header from '../../components/feature/Header';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import buySubscriptionImage from '../../images/buy_subscription.jpg';
import groupTrainingImage from '../../images/group_training_sessions.jpg';
import personalTrainingImage from '../../images/personal_training_sessions.jpg';
import ServiceCard from './ServiceCard';

const HomePage = () => {
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

            {/* <div className="container">
          <div className="buttons-holder">
            <div className="btn-xl d-grid gap-2 col-4">
              <button type="button" className="btn btn-primary">
                Купить абонемент
              </button>
            </div>
            <div className="btn-xl d-grid gap-2 col-4">
              <button type="button" className="btn btn-primary">
                <br></br>
                <br></br>
                <br></br>Групповые занятия<br></br>
                <br></br>
                <br></br>
                <br></br>
              </button>
            </div>
            <div className="btn-xl d-grid gap-2 col-4">
              <button type="button" className="btn btn-primary">
                Персональные тренировки
              </button>
            </div>
          </div>
          <div className="btn-xl d-grid gap-2">
            <button type="button" className="btn btn-primary">
              <br></br>Купить абонемент<br></br>
              <br></br>
            </button>
          </div>
        </div>
        <h2>
          <br></br>Прайс-лист
        </h2> */}
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default HomePage;
