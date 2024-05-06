import React, { useState } from 'react';
import MainDialog from '../../../../components/feature/MainDialog';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import successImage from '../../../../images/success.svg';

interface INewUserDialogProps {
  open: boolean;
  onCLose: () => void;
}

const NewUserDialog = (props: INewUserDialogProps) => {
  const { onCLose, open } = props;
  const [isSubmittedSubscription, setSubmittedSubscription] =
    useState<boolean>(false);
  const [subscription, setSubscription] = useState<string>('');
  const [role, setRole] = useState<string>('');

  return (
    <MainDialog
      open={open}
      dialogTitle={
        isSubmittedSubscription
          ? 'Логин и пароль отправлены пользователю'
          : 'Регистрация пользователя'
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
        <Stack gap="1rem">
          <TextField
            label="Фамилия"
            variant="standard"
            fullWidth
            value="Русаков"
          />
          <TextField label="Имя" variant="standard" fullWidth value="Никита" />
          <TextField
            label="Отчество"
            variant="standard"
            fullWidth
            value="Станиславович"
          />
          <TextField
            label="Почта"
            variant="standard"
            fullWidth
            value="nikitos@mail.ru"
          />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label" size="small">
              Роль
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={role}
              label="Роль"
              onChange={(event) => setRole(event.target.value)}
              size="small"
            >
              <MenuItem value="visitor">Посетитель</MenuItem>
              <MenuItem value="trainer">Тренер</MenuItem>
            </Select>
          </FormControl>
          {role === 'visitor' && (
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
                <MenuItem value={10}>Разовое посещение</MenuItem>
                <MenuItem value={20}>
                  Безлимитная карта на 1 месяц (ДНЕВНАЯ)
                </MenuItem>
                <MenuItem value={30}>
                  Безлимитная карта на 1 месяц (ВЕСЬ ДЕНЬ)
                </MenuItem>
                <MenuItem value={40}>Безлимитная карта на 3 месяца</MenuItem>
                <MenuItem value={50}>Безлимитная карта на 6 месяцев</MenuItem>
                <MenuItem value={60}>Безлимитная карта на 12 месяцев</MenuItem>
              </Select>
            </FormControl>
          )}
        </Stack>
      )}
    </MainDialog>
  );
};

export default NewUserDialog;
