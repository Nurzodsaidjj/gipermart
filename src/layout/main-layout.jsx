import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "./header/header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";

export default function MainLayout() {
  return (
    <Stack justifyContent={"space-between"} height={"100vh"}>
      <Stack gap={"10px"}>
        <Box>
          <Header />
        </Box>
        <main>
          <Outlet />
        </main>
      </Stack>
      <Box>
        <Footer />
      </Box>
    </Stack>
  );
}
