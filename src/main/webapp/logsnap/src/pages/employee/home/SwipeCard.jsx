import React, { useEffect, useState } from 'react';
import { Box, Card,CardContent, Typography, Button, Link } from '@mui/material';

const SwipeCard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = time.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const day = time.toLocaleDateString('en-GB', { weekday: 'long' });
  const formattedTime = time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <Card
      elevation={0}
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        width: 300,
      }}
    >
      {/* Top-right dot */}
      <CardContent sx={{ pb: '12px !important' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          width: 12,
          height: 12,
          bgcolor: 'mediumaquamarine',
          borderRadius: '50%',
          border: '2px solid #fce4ec'
        }}
      />

      <Typography fontWeight="bold">{formattedDate}</Typography>
      <Typography variant="body2" color="textSecondary">{day}</Typography>

      <Box mt={2} mb={3}>
        <Typography variant="h6" sx={{ letterSpacing: 2 }}>{formattedTime}</Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Link href="#" underline="hover" sx={{ color: '#3f51b5', fontWeight: 500 }}>
          View Swipes
        </Link>
        <Button variant="contained" size="small">
          Sign Out
        </Button>
      </Box>
      </CardContent>
    </Card>
  );
};

export default SwipeCard;
