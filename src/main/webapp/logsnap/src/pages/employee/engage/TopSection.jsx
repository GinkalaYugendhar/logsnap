import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import PostAddIcon from '@mui/icons-material/PostAdd';

const actionButtons = [
  { label: 'Give Kudos', icon: <ThumbUpIcon />, color: '#fbcfe8' },
  { label: 'Create Polls', icon: <BarChartIcon />, color: '#dbeafe' },
  { label: 'Create Posts', icon: <PostAddIcon />, color: '#ede9fe' },
];

export default function TopSection() {
  return (
    <Box mb={2} p={2} sx={{ background: 'white', borderRadius: 2 }}>
      <Typography variant="h6" fontWeight="bold" mb={1}>
        Hey {localStorage.getItem('fullName') || 'User'},
      </Typography>
      <Typography variant="body2" mb={2}>Ready to dive in?</Typography>

      <Box display="flex" gap={2}>
        {actionButtons.map(({ label, icon, color }) => (
          <Button
            key={label}
            variant="contained"
            startIcon={icon}
            sx={{
              backgroundColor: color,
              color: '#333',
              borderRadius: 2,
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': { backgroundColor: color },
            }}
          >
            {label}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
