// components/FeaturedBusinesses.tsx
import { Box, Grid, Paper, Typography } from "@mui/material";

const dummyBusinesses = [
  {
    name: "Akkshita Costumes",
    category: "Costumes",
    description: "Traditional & modern rentals",
  },
  {
    name: "Decor Delight",
    category: "Decor",
    description: "Event styling & props",
  },
  {
    name: "Taste of India",
    category: "Food",
    description: "Catering for festivals & weddings",
  },
];

const FeaturedBusinesses = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h5" gutterBottom>
        Featured Businesses
      </Typography>
      <Grid container spacing={3}>
        {dummyBusinesses.map((biz, index) => (
          <Grid key={index}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">{biz.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {biz.category}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {biz.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedBusinesses;
