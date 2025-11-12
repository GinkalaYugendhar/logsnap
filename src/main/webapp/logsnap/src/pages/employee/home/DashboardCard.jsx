import { Card, CardContent, Typography } from '@mui/material';

export default function DashboardCard({ title, children }) {
  return (
    <Card elevation={3} sx={{ minHeight: 120 }}>
      <CardContent>
        <Typography variant="subtitle2" gutterBottom>{title}</Typography>
        {children}
      </CardContent>
    </Card>
  );
}
