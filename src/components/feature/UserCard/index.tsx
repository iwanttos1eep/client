import { MoreVert } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  IconButton,
  Menu,
} from '@mui/material';
import React, { useState } from 'react';
import { stringAvatar } from '../../../utils/stringAvatar';

interface IUserCardProps {
  userName: string;
}

const UserCard = (props: IUserCardProps) => {
  const { userName } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" {...stringAvatar(userName)} />}
        action={
          <>
            <IconButton
              aria-controls="menu"
              aria-haspopup="true"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <Button>Перейти к странице</Button>
            </Menu>
          </>
        }
        title={userName}
        subheader="Последний визит: Май 8, 2024"
      />
    </Card>
  );
};

export default UserCard;
