import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import _ from 'lodash';
import TrainingRow from './components/TrainingRow';

const TrainingPlanning = () => {
  const rows = [
    {
      name: 'Full Body',
      data: new Date().toLocaleString(),
      users: [
        'Никита Русаков',
        'Хуснуриялов Булат',
        'Кашапов Руслан',
        'Галлямов Вадим',
        'Рубен Малаев',
      ],
    },
    {
      name: 'Super Strong',
      data: new Date().toLocaleString(),
      users: [
        'Никита Русаков',
        'Хуснуриялов Булат',
        'Кашапов Руслан',
        'Галлямов Вадим',
        'Рубен Малаев',
      ],
    },
    {
      name: 'Stretch',
      data: new Date().toLocaleString(),
      users: [
        'Никита Русаков',
        'Хуснуриялов Булат',
        'Кашапов Руслан',
        'Галлямов Вадим',
        'Рубен Малаев',
      ],
    },
  ];

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Планирование тренировок
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }} align="left">
                Занятие
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="center">
                Дата
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="right">
                Пользователи
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TrainingRow row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TrainingPlanning;
