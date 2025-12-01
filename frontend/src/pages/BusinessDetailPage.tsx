import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { useBusinessDetails } from "../hooks/useBusinessDetails";
import BusinessProfile from "./sub-components/BusinessProfile";
import ContactDetails from "./sub-components/ContactDetails";
import CustomImageGallery from "./sub-components/CustomImageGallery";
import MapSection from "./sub-components/MapSection";

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
              // id={business.businessId}
              name={business.businessName}
              ownerName={business.ownerName}
              category={business.categoryName}
              logo={business.logo}
              description={business.description}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactDetails
              name={business.businessName}
              phone={business.phoneNumber}
              email={business?.email}
              address={`${business.street}, ${business.city}, ${
                business.state
              }, ${business.country ?? "India"}, ${business.pinCode ?? ""}`}
              // businessId={business.businessId ?? ""}
              lat={business.lat}
              lon={business.lon}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <CustomImageGallery media={business.media} />
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <MapSection
              latitude={business.lat}
              longitude={business.lon}
              markerText={`${business.street}, ${business.city}, ${business.state}, ${business.country}, ${business.pinCode}`}
            />
          </Grid>
        </Grid>
      </Box>
    )
  );
}

export default BusinessDetailPage;
