// src/components/Hero.tsx
import { Box, Container, Typography, Stack } from "@mui/material";

const HeroSection = ({ city }: { city?: string }) => {
  return (
    <Box
      sx={{
        // backgroundImage: "url(/images/banner.jpg)", // Replace with your image
        // backgroundSize: "",
        background:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/banner.jpg)",
        backgroundPosition: "center",
        py: { xs: 4, md: 6 },
        color: "white",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography variant="h3" fontWeight={700}>
            Discover Local Gems in {city ?? "Your City"}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            From costume rentals to home decor — explore trusted businesses near
            you.
          </Typography>
          {/* <Button
            variant="contained"
            size="large"
            sx={{ bgcolor: "primary.main", px: 4 }}
          >
            Browse Directory
          </Button> */}
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
