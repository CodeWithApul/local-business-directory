// components/layouts/DashboardLayout.tsx
import { Box } from "@mui/material";
import Sidebar from "./SideBar";
import TopBar from "./TopBar";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Box display="flex" height="100vh">
    <Sidebar />
    <Box flexGrow={1}>
      <TopBar />
      <Box p={2}>{children}</Box>
    </Box>
  </Box>
);

export default DashboardLayout;
