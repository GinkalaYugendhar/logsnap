import React from 'react';
import { AppBar, Toolbar, Typography, Box, InputBase, IconButton, Button, Paper, MenuItem, Menu } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, ArrowDropDown } from '@mui/icons-material';

export default function Topbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" elevation={0} color="default" sx={{ borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
        {/* Left - Title */}
        <Typography variant="h6" component="div">
          Overview
        </Typography>

        {/* Right - Actions */}
        <Box display="flex" alignItems="center" gap={2}>
          {/* Search Box */}
          <Paper
            component="form"
            sx={{
              p: '2px 8px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f3f4f6',
              borderRadius: '6px',
            }}
          >
            <SearchIcon sx={{ color: '#6b7280' }} />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Actions"
              inputProps={{ 'aria-label': 'search actions' }}
            />
          </Paper>

          {/* Chat Button */}
          <Button variant="contained" sx={{ backgroundColor: '#c4b5fd', color: '#000', textTransform: 'none' }}>
            Chat with Bella
          </Button>

          {/* Bell Icon */}
          <IconButton>
            <NotificationsIcon sx={{ color: '#6b7280' }} />
          </IconButton>

          {/* Date Dropdown */}
          <Button
            variant="outlined"
            sx={{ backgroundColor: '#f3f4f6', color: '#000', textTransform: 'none' }}
            onClick={handleDropdownClick}
            endIcon={<ArrowDropDown />}
          >
            Jan 2024
          </Button>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Jan 2024</MenuItem>
            <MenuItem onClick={handleClose}>Feb 2024</MenuItem>
            <MenuItem onClick={handleClose}>Mar 2024</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
