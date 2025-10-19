import { useParams } from "react-router-dom";
import { useBusinessDetails } from "../hooks/useBusinessDetails";
import BusinessProfile from "./sub-components/BusinessProfile";
import ImageGallery from "./sub-components/ImageGallery";
import ContactDetails from "./sub-components/ContactDetails";
import MapSection from "./sub-components/MapSection";
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
          <Grid size={{ xs: 12, md: 6 }}>
            <ImageGallery media={business.media} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <MapSection
              latitude={business.latitude}
              longitude={business.longitude}
              markerText={business.address}
            />
          </Grid>
        </Grid>
      </Box>
    )
  );
}

export default BusinessDetailPage;
