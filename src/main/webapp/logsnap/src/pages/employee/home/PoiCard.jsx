import { Card, CardContent, Typography, Box } from '@mui/material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

export default function PoiCard() {
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
        <InsertDriveFileOutlinedIcon sx={{ mr: 1.5, mt: 0.5, color: '#546E7A' }} />
        <Box>
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            POI
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hold on! You can submit your Proof of Investments (POI) once released.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
