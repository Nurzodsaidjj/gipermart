import { createTheme } from "@mui/material/styles";
import colors from "./colors";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      lg: 1200,
      xl: 1445,
    },
  },
  palette: {
    primary: {
      main: colors.m3SysLightPrimary,
      contrastText: colors.m3SysLightOnPrimary,
    },
    secondary: {
      main: colors.m3SysLightSecondary,
      contrastText: colors.m3SysLightOnSecondary,
    },
    error: {
      main: colors.m3SysLightError,
      contrastText: colors.m3SysLightOnError,
    },
    background: {
      default: colors.m3SysLightBackground,
      paper: colors.m3SysLightSurface,
    },
    text: {
      primary: colors.m3SysLightOnBackground,
      secondary: colors.m3SysLightOnSurfaceVariant,
    },
  },
});

export default theme;
