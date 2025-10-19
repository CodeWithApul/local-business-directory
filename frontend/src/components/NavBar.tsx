// import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
// import { Link } from "react-router-dom";
import DrawerAppBar from './DrawerAppBar';

function NavBar() {
  return (
    // <AppBar position="static" color="primary">
    //   <Toolbar sx={{ justifyContent: "space-between" }}>
    //     <Typography variant="h6">Digital Bazaar</Typography>

    //     <Stack direction="row" spacing={2}>
    //       <Button color="inherit" component={Link} to="/">
    //         Home
    //       </Button>
    //       <Button color="inherit" component={Link} to="/add-business">
    //         Add Business
    //       </Button>
    //     </Stack>
    //   </Toolbar>
    // </AppBar>
    <DrawerAppBar></DrawerAppBar>
  );
}

export default NavBar;
