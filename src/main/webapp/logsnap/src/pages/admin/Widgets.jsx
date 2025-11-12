import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const joiners = ['Kaashif (98798)', 'Nithya (0337)', 'Sindhu (0336)'];
const birthdays = ['gtone (0112)', 'bb (ASD42)', 'bc (ASD43)'];

const Widgets = () => (
  <Grid container spacing={2} mt={2}>
    <Grid item xs={12} md={4}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle2">New Joiners (Last Month)</Typography>
        <List>
          {joiners.map((j) => (
            <ListItem key={j}><ListItemText primary={j} /></ListItem>
          ))}
        </List>
      </Paper>
    </Grid>

    <Grid item xs={12} md={4}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle2">Upcoming Birthdays</Typography>
        <List>
          {birthdays.map((b) => (
            <ListItem key={b}><ListItemText primary={b} /></ListItem>
          ))}
        </List>
      </Paper>
    </Grid>

    <Grid item xs={12} md={4}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle2">Confirmation Due</Typography>
        <Typography>No employee confirmation is pending.</Typography>
      </Paper>
    </Grid>
  </Grid>
);

export default Widgets;
