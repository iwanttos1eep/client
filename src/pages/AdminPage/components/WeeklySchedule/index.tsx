import {
  Box,
  Button,
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
import TabPanel from '../../../../components/core/TabPanel';
import NewScheduleDialog from './components/NewScheduleDialog';

const WeeklySchedule = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [isAddSchedule, setAddSchedule] = useState<boolean>(false);

  const rowsSunday = [
    {
      lesson: 'Stretch',
      trainer: 'Елена Владимировна',
      time: '10:00',
    },
    {
      lesson: 'Super Strong',
      trainer: 'Тамара Солдатова',
      time: '12:00',
    },
    {
      lesson: 'Hatha Yoga',
      trainer: 'Регина Камиловна',
      time: '13:00',
    },
    {
      lesson: 'Pilates',
      trainer: 'Айсылу Гурманова',
      time: '16:00',
    },
  ];

  return (
    <>
      <Stack direction="row" gap="1rem" justifyContent="space-between">
        <Typography variant="h5" fontWeight="bold">
          Расписание на неделю
        </Typography>
        <Button variant="contained" onClick={() => setAddSchedule(true)}>
          Добавить в расписание
        </Button>
      </Stack>
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
          <Tab label="Понедельник" />
          <Tab label="Вторник" />
          <Tab label="Среда" />
          <Tab label="Четверг" />
          <Tab label="Пятница" />
          <Tab label="Суббота" />
          <Tab label="Воскресенье" />
        </Tabs>
        <TabPanel value={tabIndex} index={0}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Занятие</TableCell>
                  <TableCell align="center">Тренер</TableCell>
                  <TableCell align="right">Время</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsSunday.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell width={'33%'} align="left">
                      {row.lesson}
                    </TableCell>
                    <TableCell width={'33%'} align="center">
                      {row.trainer}
                    </TableCell>
                    <TableCell width={'33%'} align="right">
                      {row.time}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <NewScheduleDialog
          open={isAddSchedule}
          onCLose={() => setAddSchedule(false)}
        />
      </Box>
    </>
  );
};

export default WeeklySchedule;
