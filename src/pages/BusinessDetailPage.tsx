import { useParams } from "react-router-dom";
import { useBusinessDetails } from "../hooks/useBusinessDetails";
import BusinessProfile from "./BusinessProfile";
import ImageGallery from "./ImageGallery";
import ContactDetails from "./ContactDetails";
import MapSection from "./MapSection";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

{
  /* <Container>
  <Header />
  <BusinessProfile />
  <ImageGallery />
  <ContactSection />
  <Footer />
</Container> 

Components:
BusinessProfile.tsx — name, category, description

ImageGallery.tsx — carousel or grid of images

ContactSection.tsx — phone, email, map
*/
}

function BusinessDetailPage() {
  const { id } = useParams();
  if (!id) throw Error("No id present in URL");
  const { business, loading, error } = useBusinessDetails(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!business) return <p>No business found.</p>;

  return (
    business && (
      <Box sx={{ margin: "0 auto", p: 2 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <BusinessProfile
              id={business.id}
              name={business.name}
              ownerName={business.ownerName}
              category={business.category}
              logo={business.logo}
              description={business.description}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactDetails
              phone={business.phone}
              email={business?.email}
              address={business.address}
            />
          </Grid>
        </Grid>
        <ImageGallery media={business.media} />

        <MapSection latitude={0} longitude={0} />
      </Box>
    )
  );
}

export default BusinessDetailPage;
