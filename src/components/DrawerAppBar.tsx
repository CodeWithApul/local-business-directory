import { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "../styles/toastOverride.css";

const drawerWidth = 240;
const navItems = [
  { name: "Home", url: "/" },
  { name: "Add Business", url: "/add-business" },
  { name: "Shop Login", url: "/shop/login" },
];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h1" sx={{ my: 2 }}>
        <LocalMallOutlinedIcon /> Digital Bazaar
      </Typography>
      {/* <Box
        component="img"
        src="/images/logo.png"
        alt="Digital Bazaar Logo"
        sx={{ height: 60 }}
      /> */}
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to={item.url}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <ToastContainer />
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}
        <AppBar component="nav" color="primary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <LocalMallOutlinedIcon
              fontSize="large"
              sx={{ color: "#fff", mr: 1 }}
            />
            <Typography
              variant="h1"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              {/* <Box
              component="img"
              src="/images/logo.png"
              alt="Digital Bazaar Logo"
              sx={{ height: 60, mt: 1 }}
            /> */}
              <Link to="/" aria-label="Digital Bazaar">
                Digital Bazaar
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  sx={{ color: "#fff" }}
                  component={Link}
                  to={item.url}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>

        <Toolbar />
      </Box>
    </>
  );
}
