import {
  Box,
  Paper,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import _ from 'lodash';
import TrainingRow from './components/TrainingRow';
import TabPanel from '../../../../components/core/TabPanel';
import UserCard from '../../../../components/feature/UserCard';

const TrainingPlanning = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const rows = [
    {
      name: 'Full Body',
      date: new Date().toLocaleString(),
      users: ['Никита Русаков', 'Хуснуриялов Булат'],
    },
    {
      name: 'Super Strong',
      date: new Date().toLocaleString(),
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
      date: new Date().toLocaleString(),
      users: [
        'Никита Русаков',
        'Хуснуриялов Булат',
        'Кашапов Руслан',
        'Галлямов Вадим',
        'Рубен Малаев',
      ],
    },
  ];

  const individualTrainingSessionRows = [
    {
      date: '08 мая 2024, 18:00',
      user: 'Никита Русаков',
    },
    {
      date: '08 мая 2024, 16:00',
      user: 'Хуснуриялов Булат',
    },
    {
      date: '08 мая 2024, 14:00',
      user: 'Александр Соловьёв',
    },
    {
      date: '08 мая 2024, 10:00',
      user: 'Кашапов Руслан',
    },
  ];

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Планирование тренировок
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tabIndex}
          onChange={(_, index) => setTabIndex(index)}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Групповые тренировки" />
          <Tab label="Индивидуальные тренировки" />
        </Tabs>
        <TabPanel value={tabIndex} index={0}>
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
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <Stack width="100%" height="100%">
            <TableContainer component={Paper}>
              <Table aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }} align="left">
                      Дата
                    </TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }} align="right">
                      Пользователь
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {individualTrainingSessionRows.map((row) => (
                    <TableRow
                      key={_.uniqueId()}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell width={'50%'} align="left">
                        {row.date}
                      </TableCell>
                      <TableCell width={'50%'} align="right">
                        {/* <UserCard userName={row.user} /> */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </TabPanel>
      </Box>
    </>
  );
};

export default TrainingPlanning;
