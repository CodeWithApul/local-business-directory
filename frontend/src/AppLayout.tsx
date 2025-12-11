import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import DrawerAppBar from "./components/DrawerAppBar";
import Footer from "./components/Footer";
import PromoBanner from "./components/PromoBanner";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  // const { pathname } = useLocation();
  // const shopRoutesPrefixes = ["/shop"];

  return (
    <>
      <PromoBanner />

      <Box display="flex" flexDirection="column" minHeight="100vh">
        <CssBaseline />
        <Box component="main" flexGrow={1}>
          {/* {shopRoutesPrefixes.some((route) =>
          pathname.toLowerCase().includes(route.toLowerCase())
        ) ? (
          <MiniDrawer>{children}</MiniDrawer>
        ) : ( */}
          <>
            <DrawerAppBar /> {children}
          </>
          {/* )} */}
        </Box>
        <Footer />
      </Box>
    </>
  );
}
