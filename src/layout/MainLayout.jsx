import { Box, Container } from "@mui/material";
import Header from "../components/header";
// import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      < Header/>

      {/* Main content */}
      <Box component="main" sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Container maxWidth="lg">
          {children}
        </Container>
      </Box>

      {/* Footer
      <Footer /> */}
    </Box>
  );
}
