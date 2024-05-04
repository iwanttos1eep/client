import React, { useState } from 'react';
import MainDialog from '../../../../components/feature/MainDialog';
import successImage from '../../../../images/success.svg';
import {
  Autocomplete,
  Divider,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import _ from 'lodash';

interface IGroupSessionDialogProps {
  open: boolean;
  onCLose: () => void;
}

interface ISessionOptions {
  name: string;
  surname: string;
  type: string;
}

const GroupSessionDialog = (props: IGroupSessionDialogProps) => {
  const { onCLose, open } = props;
  const [isSubmittedSubscription, setSubmittedSubscription] =
    useState<boolean>(false);
  const [isSessionListOpen, setSessionListOpen] = useState<boolean>(false);
  const [sessionValue, setSessionValue] = useState<ISessionOptions>();
  const [dateSelect, setDateSelect] = useState<string>('');
  const [timeSelect, setTimeSelect] = useState<string>('');

  const sessionOptions: ISessionOptions[] = [
    {
      name: 'Ляйсан',
      surname: 'Шахмаметова',
      type: 'Стретчинг',
    },

    {
      name: 'Владимир',
      surname: 'Штангин',
      type: 'Воркаут',
    },

    {
      name: 'Яна',
      surname: 'Петрова',
      type: 'Аэробика',
    },

    {
      name: 'Валентин',
      surname: 'Кротов',
      type: 'Кардио',
    },

    {
      name: 'Дмитрий',
      surname: 'Каневский',
      type: 'Бег',
    },
  ];

  return (
    <MainDialog
      open={open}
      dialogTitle={
        isSubmittedSubscription ? 'Ваша заявка принята' : 'Групповые занятия'
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
            disabled
          />
          <TextField
            label="Имя"
            variant="standard"
            fullWidth
            value="Никита"
            disabled
          />
          <TextField
            label="Отчество"
            variant="standard"
            fullWidth
            value="Станиславович"
            disabled
          />
          <TextField
            label="Почта"
            variant="standard"
            fullWidth
            value="nikitos@mail.ru"
            disabled
          />

          <Autocomplete
            value={sessionValue ?? null}
            onChange={(event, value) => {
              setSessionValue(value ?? undefined);
            }}
            getOptionLabel={(option) => {
              return `${option.name} | ${option.type}`;
            }}
            open={isSessionListOpen}
            onOpen={() => setSessionListOpen(true)}
            onClose={() => setSessionListOpen(false)}
            size="small"
            options={sessionOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Занятие"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: params.InputProps.endAdornment,
                }}
              />
            )}
            renderOption={(props, option) => (
              <List disablePadding key={_.uniqueId()}>
                {sessionOptions.indexOf(option) === 0 && (
                  <>
                    <ListItem>
                      {['Имя', 'Тип тренировки'].map((keyOf, index) => (
                        <ListItemText
                          sx={{ width: '50%', overflow: 'auto' }}
                          key={_.uniqueId()}
                        >
                          <Typography fontWeight="bold">{keyOf}</Typography>
                        </ListItemText>
                      ))}
                    </ListItem>
                    <Divider />
                  </>
                )}
                <ListItem {...props}>
                  {['name', 'type'].map((keyOf, index) => (
                    <ListItemText
                      sx={{ width: '50%', overflow: 'auto' }}
                      key={_.uniqueId()}
                    >
                      {option[keyOf as keyof ISessionOptions]}
                    </ListItemText>
                  ))}
                </ListItem>
                <Divider />
              </List>
            )}
          />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label" size="small">
              Дата
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={dateSelect}
              label="Дата"
              onChange={(event) => setDateSelect(event.target.value)}
              size="small"
            >
              <MenuItem value={10}>Понедельник</MenuItem>
              <MenuItem value={30}>Среда</MenuItem>
              <MenuItem value={50}>Пятница</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label" size="small">
              время
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={timeSelect}
              label="время"
              onChange={(event) => setTimeSelect(event.target.value)}
              size="small"
            >
              <MenuItem value={10}>13:00</MenuItem>
              <MenuItem value={20}>14:00</MenuItem>
              <MenuItem value={30}>18:00</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      )}
    </MainDialog>
  );
};

export default GroupSessionDialog;
