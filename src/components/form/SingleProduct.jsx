import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../../page/home/query/useGetCategory";
import {
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import { saveState, loadState } from "../../config/data/localStorage";

export default function SingleProduct() {
  const { category, id } = useParams();
  const { data, isLoading, isError } = getCategory(category);
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (data && id) {
      const found = data.find((product) => String(product.id) === String(id));
      setItem(found);
    }
  }, [data, id]);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Xatolik yuz berdi</h2>;
  if (!item) return <h2>Mahsulot topilmadi</h2>;

  // 🛒 Cart ga qo‘shish
  const handleAddToCart = () => {
    const cart = loadState("cart") || [];
    const exist = cart.find((p) => p.id === item.id);

    let updatedCart;
    if (exist) {
      updatedCart = cart.map((p) =>
        p.id === item.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }]; // quantity: 1
    }

    saveState("cart", updatedCart);
    alert("Mahsulot savatchaga qo‘shildi 🛒");
  };

  return (
    <Container sx={{ my: 6 }}>
      <Grid container spacing={4}>
        {/* Product image */}
        <Grid item xs={12} md={6}>
          <img
            src={item.img}
            alt={item.title}
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* Product info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={600} mb={2}>
            {item.title}
          </Typography>

          <Typography variant="h5" color="error" fontWeight={600} mb={2}>
            {item.price} Сум
          </Typography>

          <Button
            variant="contained"
            color="warning"
            sx={{ borderRadius: "8px", px: 4, py: 1.5, fontWeight: 600 }}
            onClick={handleAddToCart}
          >
            В корзину
          </Button>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" fontWeight={600} mb={2}>
            Характеристики
          </Typography>
          <Stack spacing={1}>
            <Typography>Бренд: {item.brand}</Typography>
            <Typography>Цвет: {item.color}</Typography>
            <Typography>Оперативная память и хранилище: {item.rame}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
