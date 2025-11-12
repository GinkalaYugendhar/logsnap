import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Card, CardContent, Typography, Box } from '@mui/material';

const PieChart = () => {
  const data = {
    labels: ['Using App', 'Not Using'],
    datasets: [
      {
        data: [60, 1107 - 60],
        backgroundColor: ['#ba68c8', '#e0e0e0'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card sx={{ width: '100%', height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          App Usage
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Pie data={data} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PieChart;
