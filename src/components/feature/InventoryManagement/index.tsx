import {
  Autocomplete,
  Button,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import MainDialog from '../MainDialog';
import successImage from '../../../images/success.svg';
import { Remove } from '@mui/icons-material';

const InventoryManagement = () => {
  const [isOpenDialog, setOpenDialog] = useState<boolean>(false);
  const [isSubmittedSubscription, setSubmittedSubscription] =
    useState<boolean>(false);

  const rows = [
    {
      name: 'Полотенце',
    },
    {
      name: 'Коврик гимнастический',
    },
    {
      name: 'Скакалка',
    },
    {
      name: 'Эспандер',
    },
    {
      name: 'Массажный ролл',
    },
  ];

  const users = [
    'Никита Русаков',
    'Хуснуриялов Булат',
    'Кашапов Руслан',
    'Галлямов Вадим',
  ];

  return (
    <>
      <Stack direction="row" gap="1rem" justifyContent="space-between">
        <Typography variant="h5" fontWeight="bold">
          Управление инвентарём
        </Typography>
        <Button variant="contained" onClick={() => setOpenDialog(true)}>
          Добавить инвентарь
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                Позиция
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                Количество
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                Статус
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell width={'33%'} align="left">
                  {row.name}
                </TableCell>
                <TableCell width={'33%'} align="center">
                  1
                </TableCell>
                <TableCell width={'33%'} align="right">
                  <Stack direction="row" alignItems="center" gap="1rem">
                    <Autocomplete
                      id="combo-box-demo"
                      options={users}
                      fullWidth
                      renderInput={(params) => (
                        <TextField {...params} label="Взявший пользователь" />
                      )}
                    />
                    <IconButton>
                      <Remove />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <MainDialog
          open={isOpenDialog}
          dialogTitle={
            isSubmittedSubscription
              ? 'Инвентарь добавлен'
              : 'Добавление инвентаря'
          }
          onClose={() => {
            setSubmittedSubscription(false);
            setOpenDialog(false);
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
                label="Название позиции"
                variant="standard"
                fullWidth
                value="Гантели 6кг"
              />
              <TextField
                label="Количество"
                variant="standard"
                fullWidth
                value="2"
              />
            </Stack>
          )}
        </MainDialog>
      </TableContainer>
    </>
  );
};

export default InventoryManagement;
