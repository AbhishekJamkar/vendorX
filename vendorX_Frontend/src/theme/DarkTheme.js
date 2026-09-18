import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark", // This sets the theme to dark mode
    primary: {
      main: "#7700ff", // Customize the primary color to your preference
    },
    secondary: {
      main: "#7700ff", // Customize the secondary color to your preference
    },
    black: {
      main: "#242B2E",
    },
    background: {
      main: "#000000",
      default: "#0D0D0D",
      paper: "#0D0D0D", // Customize the background color to your preference
    },
    textColor: {

      main: "#111111", // Customize the text color to your preference
    },
  },
});

export default darkTheme;
