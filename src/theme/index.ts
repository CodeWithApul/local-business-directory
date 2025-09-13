// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6B01", // Bright orange for header
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFF685", // Lemon yellow for footer or accents
      contrastText: "#000",
    },
    text: {
      primary: "#333",
      secondary: "#555",
    },
  },
  typography: {
    fontFamily: `'Raleway', 'Segoe UI', 'sans-serif'`,
    h1: {
      fontWeight: 700,
      fontSize: "1.8rem",
      fontStyle: "italic",
      letterSpacing: "0.5px",
      color: "#fff",
      a: {
        color: "inherit",
        textDecoration: "none",
      },
    },
    body1: {
      fontSize: "0.95rem",
    },
  },
});
export default theme;
