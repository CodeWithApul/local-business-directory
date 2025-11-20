import { Route, Routes, useLocation } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import AppLayout from "./AppLayout";
import { ProtectedRoute } from "./components/wrapper/ProtectedRoute";
import AddBusinessPage from "./pages/AddBusinessPage";
import BusinessDetailPage from "./pages/BusinessDetailPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import ShopBookings from "./pages/ShopBookings";
import ShopDashboard from "./pages/ShopDashboard";
import theme from "./theme/index";
import { LoginTypes } from "./types/LoginTypes";
import ScrollToTop from "./utils/ScrollToTop";

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
            path="/shop"
            element={
              <ProtectedRoute>
                <ShopDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/business/:id"
            element={<BusinessDetailPage key={locationKey} />}
          />
          <Route
            path="/shop/bookings"
            element={
              <ProtectedRoute>
                <ShopBookings />
              </ProtectedRoute>
            }
          />
          <Route path="/shop/logout" element={<Logout />} />
        </Routes>
      </AppLayout>
    </ThemeProvider>
  );
}
