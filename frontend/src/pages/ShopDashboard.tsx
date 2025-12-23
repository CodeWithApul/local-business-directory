import { toast } from "react-toastify";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useBusinessDetails } from "../hooks/useBusinessDetails";
import { updateBusiness } from "../services/businessService";
import { geocodeAddress } from "../utils/geoUtils";
import BusinessForm from "./forms/steps/BusinessForm";

import type { BusinessFormValues } from "./forms/steps/BusinessForm";
function ShopDashboard() {
  // const handleShopSubmit = () => {};
  const { business, refetchBusiness, loading } = useBusinessDetails();

  const handleUpdateBusiness = async (data: BusinessFormValues) => {
    console.log("00000000000000000000000000");
    try {
      const formattedAddress = `${data.street}, ${data.city}, ${data.state}, ${data.country}`;
      const { lat, lon } = await geocodeAddress(formattedAddress);
      data.lat = lat;
      data.lon = lon;
    } catch {
      return toast.error(
        "Unable to find your location, try after updating the address fields i.e. village, town"
      );
    }
    try {
      const res = await updateBusiness(data);
      if (!res.ok) {
        return toast.error("Something went wrong!");
      }
      toast.success("Business details updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 5 }}>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", fontWeight: 700, pb: 3 }}
      >
        Update your Business Details
      </Typography>
      {loading ? (
        <div>Loading Business data...</div>
      ) : (
        <BusinessForm
          mode="edit"
          initialValues={business}
          onSubmit={(data: BusinessFormValues) => {
            handleUpdateBusiness(data);
            refetchBusiness();
          }}
        />
      )}
    </Box>
  );
}

export default ShopDashboard;
