// Generate a form to show previously filled details along with a few new fields
// i.e. multiple photos and videos

import Typography from "@mui/material/Typography";
import BusinessForm, {
  type BusinessFormValues,
} from "./forms/steps/BusinessForm";

function ShopDashboard() {
  // const handleShopSubmit = () => {};

  return (
    <>
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
    </>
  );
}

export default ShopDashboard;
