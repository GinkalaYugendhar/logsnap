import React from 'react';
import {
  Box, Typography, List, ListItem, ListItemText, RadioGroup,
  FormControlLabel, Radio, Divider, InputBase
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function LeftSidebar() {
  return (
    <Box sx={{ background: 'white', borderRadius: 2, p: 2 }}>
      <Typography fontWeight="bold" mb={1}>Filters</Typography>
      <Typography variant="subtitle2">Activities</Typography>
      <RadioGroup defaultValue="all">
        <FormControlLabel value="all" control={<Radio />} label="All Activities" />
        <FormControlLabel value="kudos" control={<Radio />} label="Kudos" />
        <FormControlLabel value="polls" control={<Radio />} label="Polls" />
        <FormControlLabel value="posts" control={<Radio />} label="Posts" />
      </RadioGroup>

      <Divider sx={{ my: 2 }} />

      <Box display="flex" alignItems="center" mb={2} sx={{ border: '1px solid #ddd', borderRadius: 1, px: 1 }}>
        <SearchIcon fontSize="small" />
        <InputBase placeholder="Search" sx={{ ml: 1, flex: 1, fontSize: 14 }} />
      </Box>

      <Typography variant="subtitle2">Groups</Typography>
      {/* Placeholder accordion-like entries */}
      <List dense>
        <ListItem button><ListItemText primary="All Groups" /></ListItem>
      </List>

      <Typography variant="subtitle2">Location</Typography>
      <List dense>
        <ListItem button><ListItemText primary="All Locations" /></ListItem>
      </List>

      <Typography variant="subtitle2">Department</Typography>
      <List dense>
        <ListItem button><ListItemText primary="All Departments" /></ListItem>
      </List>
    </Box>
  );
}
