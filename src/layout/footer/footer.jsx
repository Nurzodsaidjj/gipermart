import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import footer_logo from "../../assets/svg/header.svg";
import { COLOR } from "../../config/ui/color";
import youtube from "../../assets/svg/youtube.svg";
import paymi from "../../assets/svg/paymi.svg";
export default function Footer() {
  return (
    <footer>
      <div style={{ backgroundColor: "#f5f5f6" }}>
        <Container>
          <Grid
            container
            justifyContent={"space-between"}
            py={"40px"}
            spacing={3}
          >
            <Grid item xs={12} sm={6} md={3}>
              <Stack gap={"17px"}>
                <img style={{ width: "130px" }} src={footer_logo} alt="img" />
                <Stack>
                  <Typography variant="h5">
                    <a
                      style={{
                        textDecoration: "none",
                        color: COLOR["--m3-read-only-dark-black"],
                      }}
                      href="tel:99 893 374-66-44"
                    >
                      +99 893 374-66-44
                    </a>
                  </Typography>
                  <Typography>справочная служба</Typography>
                </Stack>

                <Stack>
                  <Typography variant="h5">
                    <a
                      style={{
                        textDecoration: "none",
                        color: COLOR["--m3-read-only-dark-black"],
                      }}
                      href="tel:99 890 253-77-53"
                    >
                      +99 890 253-77-53
                    </a>
                  </Typography>
                  <Typography>интернет-магазин</Typography>
                </Stack>
              </Stack>

              <Stack>
                <Typography fontWeight={800}>Оставайтесь на связи</Typography>
                <Stack
                  direction={"row"}
                  gap={"15px"}
                  alignItems={"center"}
                  pt={2}
                  pb={4}
                >
                  <img style={{ width: "32px" }} src={youtube} alt="img" />
                  <img style={{ width: "32px" }} src={youtube} alt="img" />
                  <img style={{ width: "32px" }} src={youtube} alt="img" />
                  <img style={{ width: "32px" }} src={youtube} alt="img" />
                  <img style={{ width: "32px" }} src={youtube} alt="img" />
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Stack>
                <Typography>Контакты</Typography>
                <Typography>Доставка</Typography>
                <Typography>Оплата</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Stack>
                <Typography>Доставка</Typography>
                <Typography>Оплата</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Stack>
                <Typography>Условия обмена и возврата</Typography>
                <Typography>Каталог</Typography>
                <Typography>Контакты</Typography>
                <Typography>Доставка</Typography>
                <Typography>Оплата</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: " #eaeaea",
          width: "100%",
        }}
      >
        <Container>
          {" "}
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            <Typography>
              © 2022 Любое использование контента без письменного разрешения
              запрещено
            </Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"14px"}>
              <img src={paymi} alt="img" />
              <img src={paymi} alt="img" />
              <img src={paymi} alt="img" />
            </Stack>
          </Stack>
        </Container>
      </div>
    </footer>
  );
}
