import React, { useState } from 'react';
import MainDialog from '../../../MainDialog';
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import successImage from '../../../../../images/success.svg';

interface IVisitRegistrationDialogProps {
  open: boolean;
  onCLose: () => void;
}

const VisitRegistrationDialog = (props: IVisitRegistrationDialogProps) => {
  const { onCLose, open } = props;
  const [isSubmittedSubscription, setSubmittedSubscription] =
    useState<boolean>(false);
  const [userStatus, setUserStatus] = useState<string>('');

  const users = [
    'Никита Русаков',
    'Хуснуриялов Булат',
    'Кашапов Руслан',
    'Галлямов Вадим',
  ];

  return (
    <MainDialog
      open={open}
      dialogTitle={
        isSubmittedSubscription ? 'Подтверждено' : 'Регистрация посещения'
      }
      onClose={() => {
        setSubmittedSubscription(false);
        onCLose();
      }}
      onAccept={() => setSubmittedSubscription(true)}
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
        <Stack gap="1rem" margin="1rem 0">
          <TextField
            size="small"
            label="Время"
            value={new Date().toLocaleString()}
          />
          <Autocomplete
            size="small"
            fullWidth
            id="combo-box-demo"
            options={users}
            renderInput={(params) => (
              <TextField {...params} fullWidth label="Пользователь" />
            )}
          />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label" size="small">
              Статус
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={userStatus}
              label="Статус"
              onChange={(event) => setUserStatus(event.target.value)}
              size="small"
            >
              <MenuItem value="come">Пришёл</MenuItem>
              <MenuItem value="gone">Ушёл</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      )}
    </MainDialog>
  );
};

export default VisitRegistrationDialog;
