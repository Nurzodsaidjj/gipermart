import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import useAds from "./query/useAds";

const Discount = () => {
  const { data } = useAds("ads");
  return (
    <Box my={"50px"} bgcolor={"#00cbfe"}
        p={"40px"}>
      <Stack
        justifyContent={"start"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        Акция
      </Stack>
      <Stack
        direction={"row"}
        maxWidth={"1544px"}
        mx={"auto"}
        px={"10px"}
        
        justifyContent={"center"}
        gap={"20px"}
      >
        {data?.map((item) => (
          <img
            key={item.id}
            style={{ maxWidth: "380px", width: "100%", marginTop: "20px" }}
            src={item.img}
            alt="img"
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Discount;
