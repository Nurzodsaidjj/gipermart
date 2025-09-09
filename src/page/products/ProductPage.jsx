import { useParams } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import Product from "../../components/product";
// import { useGetCatalog } from "../home/query/useGetCatalog";
import { getCategory } from "../home/query/useGetCategory"; // yangi hook nomi

export default function ProductPage() {
  const { category } = useParams();
  const { data, isLoading, isError } = getCategory(category);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Xatolik yuz berdi</h2>;

  return (
    <Container sx={{ my: 6 }}>
      <Typography variant="h4" fontWeight={600} mb={4}>
        {category}
      </Typography>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <Product item={item} category={category} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
