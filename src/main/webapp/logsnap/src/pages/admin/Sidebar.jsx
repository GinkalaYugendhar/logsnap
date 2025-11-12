import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Box
} from '@mui/material';

import {
  Home as HomeIcon,
  BarChart as BarChartIcon,
  Group as GroupIcon,
  AccountTree as OrgChartIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 250,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 250,
          boxSizing: 'border-box',
          backgroundColor: '#f3f4f6',
          color: '#374151',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#5b21b6' }}>
          greyt<span style={{ color: '#e11d48' }}>HR</span>
        </Typography>
        <Typography variant="caption" sx={{ color: '#6b7280' }}>
          it's where the heart is!
        </Typography>
      </Box>

      <Divider />

      {/* Employee Section */}
      <Box sx={{ p: 2 }}>
        <Typography variant="caption" sx={{ textTransform: 'uppercase', color: '#6b7280' }}>
          Employee
        </Typography>
        <List>
          <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Main" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><BarChartIcon /></ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><GroupIcon /></ListItemIcon>
            <ListItemText primary="Employee Directory" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><OrgChartIcon /></ListItemIcon>
            <ListItemText primary="Organization Chart" />
          </ListItem>
        </List>
      </Box>

      <Divider />

      {/* Settings Section */}
      <Box sx={{ p: 2 }}>
        <Typography variant="caption" sx={{ textTransform: 'uppercase', color: '#6b7280' }}>
          Settings
        </Typography>
        <List>
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Setup" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Statutory" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
