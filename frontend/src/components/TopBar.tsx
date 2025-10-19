// components/layouts/TopBar.tsx
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

const TopBar = () => {
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        backgroundColor: "#fff",
        color: "#333",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Branding or Page Title */}
        <Typography variant="h6" fontWeight={600}>
          Admin Dashboard
        </Typography>

        {/* Right: Icons and Avatar */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <Avatar alt="Admin" src="/avatar.png" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
