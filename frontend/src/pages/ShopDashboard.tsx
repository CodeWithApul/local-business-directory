import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import BusinessForm from "./forms/steps/BusinessForm";

import type { BusinessFormValues } from "./forms/steps/BusinessForm";
import { useEffect, useState } from "react";
import fetchWithAuth from "../utils/fetchWithAuth";
import { toast } from "react-toastify";
import { updateBusiness } from "../services/businessService";

function ShopDashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState();

  const handleUpdateBusiness = async (data: BusinessFormValues) => {
    console.log("click");
    console.log(data);
    try {
      const res = await updateBusiness(data);
      if (!res.ok) {
        return toast.error("Somethind went wrong");
      }

      toast.success("updated successfully ");
    } catch (error) {
      console.error(error);
      toast.error("Somethind went wrong");
    }
  };

  useEffect(() => {
    const initData = async () => {
      try {
        const res = await fetchWithAuth(
          `${import.meta.env.VITE_BACKEND_URL}/api/business/get-details`,
        );
        if (res.ok) {
          const data = await res.json();
          console.dir(data, { depth: null, color: true });
          return setInitialData(data);
        }
        toast.error("Please log in to continue.");
        setTimeout(() => navigate("/shop/login"), 1000);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong, try again later.");
      } finally {
        setLoading(false);
      }
    };
    initData();
  }, [navigate]);

  return loading ? (
    <div>Loading Business data...</div>
  ) : (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 5 }}>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", fontWeight: 700, pb: 3 }}
      >
        Update your Business Details
      </Typography>
      <BusinessForm
        mode="edit"
        onSubmit={handleUpdateBusiness}
        initialValues={initialData}
      />
    </Box>
  );
}

export default ShopDashboard;
