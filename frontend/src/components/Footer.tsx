import { Box, Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        py: 3,
        mt: "auto",
        borderTop: "1px solid #ddd",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Left: Branding */}
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Digital Bazaar. All rights reserved.
        </Typography>

        {/* Right: Links */}
        <Box display="flex" gap={2}>
          <Link href="#" underline="hover" color="text.secondary">
            About
          </Link>
          <Link href="#" underline="hover" color="text.secondary">
            Contact
          </Link>
          <Link href="#" underline="hover" color="text.secondary">
            Privacy
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
