// Generate a form to show previously filled details along with a few new fields
// i.e. multiple photos and videos

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import BusinessForm from "./forms/steps/BusinessForm";

import type { BusinessFormValues } from "./forms/steps/BusinessForm";

function ShopDashboard() {
  // const handleShopSubmit = () => {};

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 5 }}>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", fontWeight: 700, pb: 3 }}
      >
        Update your Business Details
      </Typography>
      <BusinessForm
        mode="edit"
        onSubmit={(data: BusinessFormValues) => {
          console.log(data);
        }}
      />
    </Box>
  );
}

export default ShopDashboard;
