import { Card, CardContent, Typography, Box } from '@mui/material';


export default function TrackCard() {
  return (
    <Card
      elevation={0}
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        width: 300,
      }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'flex-start' }}>
        
        <Box>
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            Track
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All good! You've nothing new to track.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
