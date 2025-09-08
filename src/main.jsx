import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./config/ui/theme.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { clinet } from "./config/data/queriy-clinet.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={clinet}>
        <CssBaseline />
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </BrowserRouter>
);
