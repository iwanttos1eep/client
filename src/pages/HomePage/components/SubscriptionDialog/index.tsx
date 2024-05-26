import React, { useState } from 'react';
import MainDialog from '../../../../components/feature/MainDialog';
import successImage from '../../../../images/success.svg';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { IUser } from '../../../../interfaces/user';
import { ISubscription } from '../../../../interfaces/subscription';

interface ISubscriptionDialogProps {
  open: boolean;
  onCLose: () => void;
  user?: IUser;
  subscriptions?: ISubscription[];
  onAccept: (subscription: number) => void;
}

const SubscriptionDialog = (props: ISubscriptionDialogProps) => {
  const { open, onCLose, user, subscriptions, onAccept } = props;

  const [isSubmittedSubscription, setSubmittedSubscription] =
    useState<boolean>(false);
  const [subscription, setSubscription] = useState<string>('');
  console.log(subscription);

  return (
    <MainDialog
      open={open}
      dialogTitle={
        isSubmittedSubscription ? 'Ваша заявка принята' : 'Выбор абонемента'
      }
      onClose={() => {
        setSubmittedSubscription(false);
        onCLose();
      }}
      onAccept={() => {
        setSubmittedSubscription(true);
        onAccept(Number(subscription));
      }}
      maxWidth="md"
    >
      {isSubmittedSubscription ? (
        <Stack
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <img src={successImage} height="400px" alt="successImage" />
        </Stack>
      ) : (
        <Stack gap="1rem">
          <TextField
            label="Фамилия"
            variant="standard"
            fullWidth
            value={user?.lastName}
            disabled
          />
          <TextField
            label="Имя"
            variant="standard"
            fullWidth
            value={user?.firstName}
            disabled
          />
          <TextField
            label="Почта"
            variant="standard"
            fullWidth
            value={user?.email}
            disabled
          />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label" size="small">
              Абонемент
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={subscription}
              label="Абонемент"
              onChange={(event) => setSubscription(event.target.value)}
              size="small"
            >
              {subscriptions?.map((sub) => (
                <MenuItem key={sub.id} value={sub.id}>
                  {sub.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      )}
    </MainDialog>
  );
};

export default SubscriptionDialog;
