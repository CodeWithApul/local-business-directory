import { useLocation } from "react-router-dom";
import MiniDrawer from "./components/MiniVariantDrawer";
import DrawerAppBar from "./components/DrawerAppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const shopRoutesPrefixes = ["/shop"];

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CssBaseline />

      <Box component="main" flexGrow={1}>
        {shopRoutesPrefixes.some((route) =>
          pathname.toLowerCase().includes(route.toLowerCase())
        ) ? (
          <MiniDrawer>{children}</MiniDrawer>
        ) : (
          <>
            <DrawerAppBar /> {children}
          </>
        )}
      </Box>
      <Footer />
    </Box>
  );
}
