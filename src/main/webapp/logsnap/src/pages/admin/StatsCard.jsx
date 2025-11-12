import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const StatsCard = ({ title, value, sub }) => (
  <Card variant="outlined">
    <CardContent>
      <Typography variant="subtitle2" color="textSecondary">{title}</Typography>
      <Typography variant="h5">{value}</Typography>
      {sub && <Typography variant="caption" color="textSecondary">{sub}</Typography>}
    </CardContent>
  </Card>
);

export default StatsCard;
