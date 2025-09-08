import React from "react";
import useCatalogGet from "../query/useCatalogGet";
import { Stack, Typography } from "@mui/material";
import Slider from "react-slick";

export default function HomeCotelog() {
  const { data, isLoading, isError, error } = useCatalogGet();

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      {isLoading ? (
        "loading"
      ) : (
        <Slider {...settings}>
          {data.map((item) => (
            <Stack key={item.id} direction={"row"} gap={"15px"} py={"35px"} alignItems={"center"} px={"10px"}>
              <Stack
                bgcolor={"inherit"}
                direction={"row"}
                alignItems={"center"}
                gap={"15px"}
              >
                <img
                  style={{ width: "95px", height: "95px" }}
                  src={item.img}
                  alt="img"
                />
                <Typography maxWidth={"140px"}>{item.text}</Typography>
              </Stack>
            </Stack>
          ))}
        </Slider>
      )}
    </div>
  );
}
