import { useGetCatalog } from "../query/useGetCatalog";
import { Modal, Box, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomeCatalog({ open, handleClose }) {
  const { data, isLoading, isError } = useGetCatalog("catalog");
  const navigate = useNavigate();

  if (isLoading) return null;
  if (isError) return <div>Xatolik yuz berdi!</div>;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, 0)",
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          maxWidth: "900px",
          width: "100%",
          borderRadius: "12px",
          overflowY: "auto",
        }}
      >
        <Grid container spacing={4}>
          {data?.map((category) => (
            <Grid key={category.id} item xs={12} sm={6} md={4}>
              <Stack spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <img
                    src={category.img}
                    alt={category.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                    }}
                  />
                  <Typography variant="h6">{category.title}</Typography>
                </Stack>

                <Stack spacing={1}>
                  {category.subcategories?.map((sub) => (
                    <Typography
                      key={sub.id}
                      variant="body2"
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        handleClose();
                        navigate(`/${sub.name}`);
                      }}
                    >
                      {sub.name}
                    </Typography>
                  ))}

                  <Typography
                    variant="body2"
                    color="error"
                    sx={{ cursor: "pointer", fontWeight: "bold" }}
                    onClick={() => {
                      handleClose();
                      navigate(`/${category.name}`);
                    }}
                  >
                    Показать все
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Modal>
  );
}
