import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, IconButton, Divider, Button, Link } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#000000', '#a0eec0', '#1e90ff'];

const PayslipCard = () => {
  const [showSalary, setShowSalary] = useState(false);

  // Dummy values
  const grossPay = 50000;
  const deduction = 5000;
  const netPay = grossPay - deduction;
  const paidDays = 31;

  const salaryData = [
    { name: 'Gross Pay', value: grossPay },
    { name: 'Deduction', value: deduction },
    { name: 'Net Pay', value: netPay }
  ];

  return (
    <Card
      elevation={0}
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        width: 300,
      }}
    >
      <CardContent sx={{ pb: '12px !important' }}>
         <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="subtitle2" fontWeight="bold">
            Payslip
          </Typography>
          <IconButton size="small">
            <ArrowForwardIosIcon fontSize="small" sx={{ color: '#546E7A' }} />
          </IconButton>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center" my={2}>
          <PieChart width={120} height={120}>
            <Pie
              data={salaryData}
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={45}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {salaryData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#fff" />
              ))}
            </Pie>
          </PieChart>
        </Box>

        <Typography align="center" fontWeight={600} color="text.secondary">Jul 2025</Typography>
        <Typography align="center" fontSize={14} color="text.secondary" mb={1}>
          {paidDays} Paid Days
        </Typography>

        <Box px={1}>
          <Typography variant="body2">
            <span style={{ color: '#000' }}>⬛ Gross Pay:</span>{' '}
            {showSalary ? `₹${grossPay.toLocaleString()}` : '*****'}
          </Typography>
          <Typography variant="body2">
            <span style={{ color: '#a0eec0' }}>🟩 Deduction:</span>{' '}
            {showSalary ? `₹${deduction.toLocaleString()}` : '*****'}
          </Typography>
          <Typography variant="body2">
            <span style={{ color: '#1e90ff' }}>🟦 Net Pay:</span>{' '}
            {showSalary ? `₹${netPay.toLocaleString()}` : '*****'}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box display="flex" justifyContent="space-between" alignItems="center" px={1}>
          <Link href="#" underline="hover" fontSize={14}>Download</Link>
          <Button
            size="small"
            variant="text"
            sx={{ textTransform: 'none', fontSize: 14 }}
            onClick={() => setShowSalary(prev => !prev)}
          >
            {showSalary ? 'Hide Salary' : 'Show Salary'}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PayslipCard;
