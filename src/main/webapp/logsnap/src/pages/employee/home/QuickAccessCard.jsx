import { Card, CardContent, Typography, Box } from '@mui/material';

export default function QuickAccessCard() {
  return (
    <Card
      elevation={0}
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        width: 300,
        display: 'flex',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
          Quick Access
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>Reimbursement Payslip</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>IT Statement</Typography>
        <Typography variant="body2">YTD Reports</Typography>
      </CardContent>

      <Box
        sx={{
          backgroundColor: '#FFF3E0',
          p: 1.5,
          width: '40%',
          display: 'flex',
          alignItems: 'center',
          fontSize: 12,
          color: '#555',
        }}
      >
        Use quick access to view important salary details.
      </Box>
    </Card>
  );
}
