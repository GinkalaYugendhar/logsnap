import { Box, Grid, Typography } from '@mui/material';
import SwipeCard from './SwipeCard';
import PayslipCard from './PayslipCard';
import HolidayCard from './HolidayCard';
import QuickAccessCard from './QuickAccessCard';
import PoiCard from './PoiCard';
import ReviewCard from './ReviewCard';
import TrackCard from './TrackCard';
import ItDeclarationCard from './ItDeclaration';
import FbpDeclarationCard from './FbpDeclaration';

export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>

      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h5">Good Morning</Typography>
        <Typography variant="body2" mb={2}>
          The great thing in this world is not so much where you stand, as in what direction you are moving.
        </Typography>

        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={12} sm={6} md={3}>
            <ReviewCard/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <SwipeCard />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <HolidayCard />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <PayslipCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <QuickAccessCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <PoiCard />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <FbpDeclarationCard/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ItDeclarationCard/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TrackCard/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
