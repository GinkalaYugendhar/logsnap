import React, { useState } from 'react';
import {
  Box, Grid, Paper, Typography, Divider, Button, Card, CardContent
} from '@mui/material';

const summaryStats = [
  { title: 'AVG. WORK HRS', value: '11:25', sub: '+3% From July' },
  { title: 'AVG. ACTUAL WORK HRS', value: '10:35', sub: '+12% From July' },
  { title: 'PENALTY DAYS', value: '0', sub: '' },
];

const attendanceData = {
  '2025-08-01': 'P',
  '2025-08-02': 'O',
  '2025-08-04': 'P',
  '2025-08-07': 'RS',
  '2025-08-10': 'O',
  '2025-08-11': 'P',
  '2025-08-12': 'A',
  '2025-08-13': 'P',
  '2025-08-14': 'P',
  '2025-08-15': 'P',
  '2025-08-16': 'P',
  '2025-08-17': 'O',
  '2025-08-18': 'P',
  '2025-08-19': 'P',
  '2025-08-20': 'P',
  '2025-08-21': 'P',
  '2025-08-22': 'P',
  '2025-08-23': 'P',
  '2025-08-24': 'O',
  '2025-08-25': 'P',
  '2025-08-26': 'P',
  '2025-08-27': 'P',
  '2025-08-28': 'P',
  '2025-08-29': 'P',
  '2025-08-30': 'A',
};

const getStatusColor = (status) => {
  switch (status) {
    case 'P': return '#C8E6C9'; // Green
    case 'A': return '#FFCDD2'; // Red
    case 'RS': return '#BBDEFB'; // Blue
    case 'O': return '#E0E0E0'; // Gray
    default: return '#F5F5F5';  // Default
  }
};

const AttendanceInfo = () => {
  const [selectedDate, setSelectedDate] = useState('2025-08-07');

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const getDayStatus = (day) => {
    const dateStr = `2025-08-${String(day).padStart(2, '0')}`;
    return attendanceData[dateStr] || '';
  };

  // August 2025 starts on a Friday
  const startOffset = 5; // So we need 5 empty boxes first
  const daysInMonth = 31;

  return (
    <Box p={3}>
      {/* Header */}
      <Typography variant="h6" mb={2}>Attendance Info</Typography>

      {/* Summary Cards */}
      <Grid container spacing={2} mb={3}>
        {summaryStats.map((item) => (
          <Grid item xs={12} sm={4} key={item.title}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2">{item.title}</Typography>
                <Typography variant="h5">{item.value}</Typography>
                <Typography variant="body2" color="success.main">{item.sub}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item>
          <Button variant="text" sx={{ mt: 2 }}>+3 INSIGHTS</Button>
        </Grid>
      </Grid>

      {/* Calendar and Details */}
      <Grid container spacing={2}>
        {/* Calendar Grid */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>August 2025</Typography>

            {/* Days of Week Header */}
            <Grid container spacing={1}>
              {daysOfWeek.map((day) => (
                <Grid item xs={1.7} key={day}>
                  <Typography align="center" variant="body2" fontWeight="bold">{day}</Typography>
                </Grid>
              ))}
            </Grid>

            {/* Calendar Cells */}
            <Grid container spacing={1} mt={1}>
              {/* Empty Cells for Offset */}
              {[...Array(startOffset)].map((_, idx) => (
                <Grid item xs={1.7} key={`empty-${idx}`}>
                  <Box sx={{ height: 60 }} />
                </Grid>
              ))}

              {/* Calendar Dates */}
              {[...Array(daysInMonth)].map((_, i) => {
                const day = i + 1;
                const dateStr = `2025-08-${String(day).padStart(2, '0')}`;
                const status = getDayStatus(day);
                const isSelected = selectedDate === dateStr;

                return (
                  <Grid item xs={1.7} key={day}>
                    <Paper
                      onClick={() => setSelectedDate(dateStr)}
                      elevation={isSelected ? 4 : 1}
                      sx={{
                        height: 60,
                        backgroundColor: getStatusColor(status),
                        border: isSelected ? '2px solid #1976d2' : '1px solid #ccc',
                        borderRadius: 1,
                        cursor: 'pointer',
                        textAlign: 'center',
                        p: 1,
                      }}
                    >
                      <Typography variant="body2">{day}</Typography>
                      {status && (
                        <Typography variant="caption" fontWeight="bold">
                          {status}
                        </Typography>
                      )}
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Paper>
        </Grid>

        {/* Day Detail Info */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              {selectedDate} - Regular Shift (RS)
            </Typography>
            <Typography variant="body2" mb={2}>Shift: 07:00 to 16:00</Typography>
            <Divider sx={{ mb: 1 }} />

            <Typography variant="body2" fontWeight="bold">Processed on</Typography>
            <Typography variant="body2">First In: - | Last Out: -</Typography>
            <Typography variant="body2">Total Work Hrs: - | Actual: -</Typography>

            <Divider sx={{ my: 1 }} />
            <Typography variant="body2" fontWeight="bold">Status Details</Typography>
            <Typography variant="body2">Status: -</Typography>
            <Typography variant="body2">Remarks: -</Typography>

            <Divider sx={{ my: 1 }} />
            <Typography variant="body2" fontWeight="bold">Session Details</Typography>
            <Typography variant="body2">Session 1: 07:00 - 12:00 | In: - | Out: -</Typography>
            <Typography variant="body2">Session 2: 12:01 - 16:00 | In: - | Out: -</Typography>

            <Typography mt={2} variant="caption">Swipes (Total: 05:14 hrs)</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AttendanceInfo;
