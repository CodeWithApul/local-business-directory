// components/layouts/Sidebar.tsx
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import CategoryIcon from "@mui/icons-material/Category";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Dashboard", icon: <DashboardIcon />, path: "/admin" },
    { label: "Businesses", icon: <StoreIcon />, path: "/admin/businesses" },
    { label: "Categories", icon: <CategoryIcon />, path: "/admin/categories" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <List>
        {navItems.map(({ label, icon, path }) => (
          <ListItem key={label} onClick={() => navigate(path)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
