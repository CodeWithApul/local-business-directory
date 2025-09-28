import { Card, CardContent, Typography, CardMedia } from "@mui/material";
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
  const { name, ownerName, category, logo } = props;

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
        alt="Costume Preview"
        sx={{ width: 200 }}
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Category: {category}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Owner: {ownerName}
        </Typography>
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
