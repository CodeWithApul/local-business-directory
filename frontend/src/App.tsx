import { Route, Routes, useLocation } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import theme from "./theme/index";
import Home from "./pages/Home";
import AddBusinessPage from "./pages/AddBusinessPage";
import Login from "./pages/Login";
import ScrollToTop from "./utils/ScrollToTop";
import { LoginTypes } from "./types/LoginTypes";
import ShopDashboard from "./pages/ShopDashboard";
import AppLayout from "./AppLayout";
import BusinessDetailPage from "./pages/BusinessDetailPage";
// import ShopBookings from "./pages/ShopBookings";

export default function App() {
  const locationKey = useLocation().key;
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add-business"
            element={<AddBusinessPage key={locationKey} />}
          />
          <Route
            path="/shop/login"
            element={<Login key={locationKey} type={LoginTypes.SHOP_LOGIN} />}
          />
          <Route
            path="/business/:id"
            element={<BusinessDetailPage key={locationKey} />}
          />
          <Route path="/shop" element={<ShopDashboard />} />
          {/*<Route path="/shop/bookings" element={<ShopBookings />} />*/}
        </Routes>
      </AppLayout>
    </ThemeProvider>
  );
}
