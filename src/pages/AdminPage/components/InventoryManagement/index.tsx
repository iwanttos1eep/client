import {
  Autocomplete,
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
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import TabPanel from '../../../../components/core/TabPanel';

const InventoryManagement = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const rows = [
    {
      name: 'Инвентарь 1',
    },
    {
      name: 'Инвентарь 2',
    },
    {
      name: 'Инвентарь 3',
    },
    {
      name: 'Инвентарь 4',
    },
    {
      name: 'Инвентарь 5',
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
      <Typography variant="h5" fontWeight="bold">
        Управление инвентарём
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
          <Tab label="ВЫДАЧА/ПОЛУЧЕНИЕ ИНВЕНТАРЯ" />
          <Tab label="ДОБАВЛЕНИЕ ИНВЕНТАРЯ" />
        </Tabs>
        <TabPanel value={tabIndex} index={0}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Позиция</TableCell>
                  <TableCell>Количество</TableCell>
                  <TableCell align="right">Статус</TableCell>
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
                    <TableCell width={'33%'} align="left">
                      1
                    </TableCell>
                    <TableCell width={'33%'} align="right">
                      <Autocomplete
                        id="combo-box-demo"
                        options={users}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                          <TextField {...params} label="Взявший пользователь" />
                        )}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <Stack gap="1.5rem" marginLeft="1rem">
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
            <Button variant="contained" color="success">
              Добавить
            </Button>
          </Stack>
        </TabPanel>
      </Box>
    </>
  );
};

export default InventoryManagement;
