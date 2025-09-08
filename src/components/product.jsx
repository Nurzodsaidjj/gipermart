import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Like_icons from "../assets/icon/like_icons";
import Card_icons from "../assets/icon/card_icons";
import { addToCart } from "../page/home/query/addToCart";
export default function Product({ item }) {
  return (
    <Stack
      width={234}
      height={273}
      justifyContent="space-between"
      sx={{
        paddingLeft: "4px",
        paddingRight: "48px",
        borderRadius: "12px",
        flexShrink: 0, // slider ichida siqilib ketmasin
      }}
    >
      <Stack flexGrow={1}>
        <Stack direction="row" justifyContent="space-between">
          <img
            style={{
              maxWidth: "130px",
              objectFit: "contain",
            }}
            src={item.img}
            alt="img"
          />
          <Like_icons />
        </Stack>
        <Typography
          variant="h6"
          sx={{
            fontSize: "14px",
            lineHeight: "1.4",
            mt: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {item.title}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h3" fontSize={13} fontWeight={600}>
          {item.price} CYM
        </Typography>
        <Button
          onClick={() => addToCart(item)}
          sx={{
            backgroundColor: "yellow",
            minWidth: "40px",
            height: "40px",
            borderRadius: "8px",
          }}
        >
          <Card_icons />
        </Button>
      </Stack>
    </Stack>
  );
}
