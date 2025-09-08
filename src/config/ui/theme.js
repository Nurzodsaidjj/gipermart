import { createTheme } from "@mui/material";
import { COLOR } from "./color";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 1000,
      lg: 1310,
    },
  },
  typography: {
    h3: { fontFamily: ["Jost", "sans-serif"].join(",") },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: COLOR["--gipermart"],
          color: COLOR["--m3-sys-light-on-tertiary-container"],
          padding:"10px 46px",
          fontWeight:"400",
        },
      },
    },
  },
});
