import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleIncrease = (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(newCart);
  };

  const handleDecrease = (id) => {
    const newCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(newCart);
  };

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    updateCart(newCart);
  };

  const total = cart.reduce(
    (acc, item) => {
      let price = 0;
      if (typeof item.price === "string" && item.price) {
        const cleaned = item.price.replace(/\s/g, "");
        price = isNaN(Number(cleaned)) ? 0 : Number(cleaned);
      } else if (typeof item.price === "number" && !isNaN(item.price)) {
        price = item.price;
      }
      // quantity har doim 1 bo‘lishini kafolatlash
      const qty =
        typeof item.quantity === "number" && item.quantity > 0
          ? item.quantity
          : 1;
      return acc + price * qty;
    },
    0
  );

  return (
    <Container sx={{ my: 6 }}>
      <Typography variant="h4" mb={4}>
        🛒 Корзина
      </Typography>

      {cart.length === 0 ? (
        <Typography>Корзина пустая</Typography>
      ) : (
        <Stack spacing={3}>
          {cart.map((item) => (
            <Stack
              key={item.id}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              p={2}
              border="1px solid #ddd"
              borderRadius="12px"
            >
              <Stack direction="row" gap={2} alignItems="center">
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: 80, height: 80, borderRadius: 8 }}
                />
                <Stack>
                  <Typography fontWeight={600}>{item.title}</Typography>
                  <Typography color="error">{item.price} сум</Typography>
                </Stack>
              </Stack>

              <Stack direction="row" gap={1} alignItems="center">
                <Button
                  sx={{
                    border: "2px solid  #ededed",
                    borderRadius: "8px",
                    padding: "2px 4px",
                  }}
                  onClick={() => handleDecrease(item.id)}
                >
                  -
                </Button>
                <Typography>{item.quantity}</Typography>
                <Button
                  sx={{
                    border: "2px solid  #ededed",
                    borderRadius: "8px",
                    padding: "2px 4px",
                  }}
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </Button>
              </Stack>

              <Button color="error" onClick={() => handleRemove(item.id)}>
                Удалить
              </Button>
            </Stack>
          ))}

          <Divider />

          <Typography variant="h5" fontWeight={600}>
            Общая сумма: {total.toLocaleString()} сум
          </Typography>

          <Button variant="contained" color="warning" size="large">
            Оформить заказ
          </Button>
        </Stack>
      )}
    </Container>
  );
}
