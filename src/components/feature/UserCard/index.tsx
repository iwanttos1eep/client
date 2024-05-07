import { MoreVert } from '@mui/icons-material';
import { Avatar, Card, CardHeader, IconButton } from '@mui/material';
import React from 'react';
import { stringAvatar } from '../../../utils/stringAvatar';

interface IUserCardProps {
  userName: string;
}

const UserCard = (props: IUserCardProps) => {
  const { userName } = props;
  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" {...stringAvatar(userName)} />}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={userName}
        subheader="Последний визит: Сентябрь 14, 2016"
      />
    </Card>
  );
};

export default UserCard;
