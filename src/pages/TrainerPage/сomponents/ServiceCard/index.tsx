import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
  } from '@mui/material';
  import React from 'react';
  
  interface IServiceCardProps {
    image: string;
    title: string;
    subTitle: string;
    onCardClick: () => void;
  }
  
  const ServiceCard = (props: IServiceCardProps) => {
    const { image, onCardClick, subTitle, title } = props;
    return (
      <Card sx={{ width: 330, flex: 'none' }}>
        <CardActionArea onClick={onCardClick}>
          <CardMedia
            sx={{ height: 140 }}
            image={image}
            title="buySubscriptionImage"
          />
          <CardContent sx={{ minHeight: 160 }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  
  export default ServiceCard;
  