import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import { Box, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import DrawerAppBar from "./components/DrawerAppBar";
import Footer from "./components/Footer";
import AddBusinessPage from "./pages/AddBusinessPage";
import theme from "./theme/index";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <CssBaseline />
      <DrawerAppBar />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Box component="main" flexGrow={1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/add-business"
              element={<AddBusinessPage key={useLocation().key} />}
            />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
