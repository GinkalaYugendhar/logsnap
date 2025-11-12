import React, { useState } from 'react';
import {
  Box, Tabs, Tab, TextField, InputAdornment, Typography, Paper
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function ReviewPage() {
  const [tab, setTab] = useState(0);

  const handleTabChange = (_, newValue) => setTab(newValue);

  return (
    <Box p={3}>
      {/* Header */}
      <Box mb={2}>
        <Typography variant="h6" fontWeight="bold">Attendance Regularization</Typography>
      </Box>

      {/* Tabs + Filters */}
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <Tabs value={tab} onChange={handleTabChange} sx={{ minWidth: 200 }}>
          <Tab label="Active" />
          <Tab label="Closed" />
        </Tabs>

        <TextField
          size="small"
          placeholder="Select date range"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarMonthIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          size="small"
          placeholder="Search Employee"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Main Content */}
      <Paper variant="outlined" sx={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box textAlign="center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486111.png" // Placeholder, replace with yours
            alt="No records"
            width={100}
            height={100}
            style={{ opacity: 0.3, marginBottom: 16 }}
          />
          <Typography variant="body2" color="text.secondary">
            Hey, you have no regularization records to view
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
