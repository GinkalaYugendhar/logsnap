import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Divider } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const posts = [
  {
    id: 1,
    name: 'Aman Iqbal Sayyed',
    years: 2,
    time: '5 hours ago',
  },
  {
    id: 2,
    name: 'Sudheer Bijji',
    years: 8,
    time: '5 hours ago',
  }
];

export default function ActivityFeed() {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="subtitle2" fontWeight="bold">All Activities - All Groups</Typography>
        <Typography variant="body2" sx={{ color: '#555' }}>Sort: Newest first</Typography>
      </Box>

      {posts.map((post) => (
        <Card key={post.id} variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="subtitle2" fontWeight="bold" color="primary">COMPANY</Typography>
            <Typography variant="body2" mb={1}>Group: Events</Typography>

            <Grid container spacing={2}>
              <Grid item>
                <EmojiEventsIcon fontSize="large" color="secondary" />
              </Grid>
              <Grid item xs>
                <Typography variant="body2">
                  Our congratulations to {post.name} on completing {post.years} successful year(s).
                </Typography>
                <Typography fontWeight="bold" mt={1}>
                  🎉 Congratulations, {post.name}!
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />
            <Box display="flex" gap={3}>
              <Typography variant="body2" sx={{ cursor: 'pointer' }}>💬 Reaction</Typography>
              <Typography variant="body2" sx={{ cursor: 'pointer' }}>🗨️ Comment</Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
