import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Stack,
  Box,
  Divider,
} from "@mui/material";
import { Person, Storefront } from "@mui/icons-material";
import type { IBusiness } from "../data/dummyData";

//  <BusinessProfile />
{
  /* <Card sx={{ display: 'flex', flexDirection: 'row', maxWidth: 600 }}>
      <CardMedia
        component="img"
        image="/images/costume.jpg"
        alt="Costume Preview"
        sx={{ width: 200 }}
      />
      <CardContent>
        <Typography variant="h6">Krishna Costume</Typography>
        <Typography variant="body2" color="text.secondary">
          Perfect for Janmashtami school events. Includes accessories.
        </Typography>
      </CardContent>
    </Card> */
}

function BusinessProfile(props: Partial<IBusiness>) {
  const { name, ownerName, category, logo, description } = props;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <CardMedia
        component="img"
        image={logo}
        alt="Preview"
        sx={{ width: 200 }}
      />
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h5" color="text.primary">
            {name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Storefront fontSize="small" sx={{ mr: 0.5 }} />
            <Typography variant="subtitle1" color="text.secondary">
              {category}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Person fontSize="small" sx={{ mr: 0.5 }} />
            <Typography variant="subtitle2" color="text.secondary">
              {ownerName}
            </Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            {description}
            {description}
          </Typography>
        </Stack>
        {/* <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid sx={{ xs: 12, sm: 6 }}>
              <Typography variant="body1" gutterBottom>
                Phone: {phone}
              </Typography>
            </Grid>
            <Grid sx={{ xs: 12, sm: 6 }}>
              <Typography variant="body1" gutterBottom>
                Email: {email}
              </Typography>
            </Grid>
          </Grid> */}
      </CardContent>
    </Card>
  );
}

export default BusinessProfile;
