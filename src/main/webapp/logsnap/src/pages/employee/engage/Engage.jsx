import React from 'react';
import { Grid, Box } from '@mui/material';
import TopSection from './TopSection';
import LeftSidebar from './LeftSidebar';
import ActivityFeed from './ActivityFeed';

export default function EngagePage() {
  return (
    <Box p={3}>
      <TopSection />
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={3}>
          <LeftSidebar />
        </Grid>
        <Grid item xs={12} md={9}>
          <ActivityFeed />
        </Grid>
      </Grid>
    </Box>
  );
}
