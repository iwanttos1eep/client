import { Add } from '@mui/icons-material';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const SubscriptionTab = () => {
  const contentRows = [
    {
      title: 'Разовое посещение',
      price: 250,
    },
    {
      title: 'Безлимитная карта на 1 месяц (ДНЕВНАЯ)',
      price: 1200,
    },
    {
      title: 'Безлимитная карта на 1 месяц (ВЕСЬ ДЕНЬ)',
      price: 1700,
    },
    {
      title: 'Безлимитная карта на 3 месяца',
      price: 4200,
    },
    {
      title: 'Безлимитная карта на 6 месяцев',
      price: 7800,
    },
    {
      title: 'Безлимитная карта на 12 месяцев',
      price: 14000,
    },
  ];

  return (
    <List disablePadding>
      <ListItem>
        <ListItemText sx={{ width: '50%', overflow: 'auto' }}>
          <Typography fontWeight="bold">Услуга</Typography>
        </ListItemText>
        <ListItemText
          sx={{
            width: '50%',
            overflow: 'auto',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Typography fontWeight="bold">Цена</Typography>
        </ListItemText>
      </ListItem>
      <Divider />
      {contentRows.map((row, index) => (
        <>
          <ListItem>
            <ListItemText sx={{ width: '50%', overflow: 'auto' }}>
              {row.title}
            </ListItemText>
            <ListItemText
              sx={{
                width: '50%',
                overflow: 'auto',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              {row.price}
            </ListItemText>
            <IconButton>
              <Add />
            </IconButton>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
};

export default SubscriptionTab;
