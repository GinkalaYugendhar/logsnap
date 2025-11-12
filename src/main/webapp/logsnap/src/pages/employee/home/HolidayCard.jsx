import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const holidays = [
  { date: '15 Aug', day: 'Friday', name: 'Independence Day' },
  { date: '27 Aug', day: 'Wednesday', name: 'Ganesh Chaturthi' },
  { date: '02 Oct', day: 'Thursday', name: 'Mahatma Gandhi Jayanti / Dussehra (Vijaya Dasami)' },
  { date: '20 Oct', day: 'Monday', name: 'Diwali' },
];

export default function HolidayCard() {
  return (
    <Card
      elevation={0}
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        width: 300,
      }}
    >
      <CardContent sx={{ pb: '12px !important' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="subtitle2" fontWeight="bold">
            Upcoming Holidays
          </Typography>
          <IconButton size="small">
            <ArrowForwardIosIcon fontSize="small" sx={{ color: '#546E7A' }} />
          </IconButton>
        </Box>

        {holidays.map((holiday, index) => (
          <Box key={index} mb={1.5}>
            <Typography fontWeight="bold" variant="body2">
              {holiday.date}{' '}
              <Typography component="span" variant="body2" sx={{ fontWeight: 400 }}>
                {holiday.day}
              </Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary"   sx={{
        wordBreak: 'break-word',
        whiteSpace: 'normal',
      }}>
              {holiday.name}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
