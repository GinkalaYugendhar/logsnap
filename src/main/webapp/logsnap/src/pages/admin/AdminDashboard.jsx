import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import Sidebar from './Sidebar';
import StatsCard from './StatsCard';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import Widgets from './Widgets';
import Topbar from './Topbar';

const AdminDashboard = () => {
  return (
    <Box display="flex">
      <Sidebar />

      <Box flex={1}>
        <Topbar />

        <Container sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {/* Stats Cards */}
            <Grid item xs={12} md={4}><StatsCard title="Employees Head Count" value="1112" /></Grid>
            <Grid item xs={12} md={4}><StatsCard title="Helpdesk Stats" value="4" sub="2 Raised, 4 Solved" /></Grid>
            <Grid item xs={12} md={4}><StatsCard title="Mobile App Users" value="60 / 1107" /></Grid>

            {/* Charts */}
            <Grid item xs={12} md={6}><LineChart /></Grid>
            <Grid item xs={12} md={3}><BarChart /></Grid>
            <Grid item xs={12} md={3}><PieChart /></Grid>

            {/* Widgets */}
            <Grid item xs={12}><Widgets /></Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
