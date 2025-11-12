import { Card, CardContent, Typography, Box } from '@mui/material';


export default function FbpDeclarationCard() {
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
            FBP Declaration
          </Typography>
          <Typography variant="body2" color="text.secondary">
            FBP considered for April 2025.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
