import {
  Badge,
  Button,
  Container,
  Drawer,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { COLOR } from "../../config/ui/color";
import Tel_icons from "../../assets/icon/tel_icons";
import header_svg from "../../assets/svg/header.svg";
import Menu_icons from "../../assets/icon/menu_icons";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/form/form";
import User_icons from "../../assets/icon/user_icons";
import Like_icons from "../../assets/icon/like_icons";
import Card_icons from "../../assets/icon/card_icons";
import React from "react";
import menu_icons_dr from "../../assets/svg/menu.svg";
export default function Header() {
  const [open, setopen] = React.useState(false);
  const sizedrower = useMediaQuery("(max-width:1229px)");
  const sizedrowers = useMediaQuery("(max-width:1021px)");
  const inputs = useMediaQuery("(min-width:695px)");
  const form = useMediaQuery("(min-width:540px)");
  const nav = useNavigate();
  const toggleDrawer = (data) => {
    setopen(data);
  };
  return (
    <header>
      {inputs ? (
        <div className="header_top">
          <Container>
            <Stack
              py={"8px"}
              gap={"24px"}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"end"}
            >
              <Typography
                fontSize={"16px"}
                color={COLOR["--m3-sys-light-on-background"]}
              >
                Доставка и оплата
              </Typography>
              <Typography
                fontSize={"16px"}
                color={COLOR["--m3-sys-light-on-background"]}
              >
                Пункты выдачи
              </Typography>
              <Typography
                fontSize={"16px"}
                color={COLOR["--m3-sys-light-on-background"]}
              >
                Поддержка
              </Typography>
              <Typography
                fontSize={"16px"}
                color={COLOR["--m3-sys-light-on-background"]}
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: COLOR["--m3-sys-light-on-background"],
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                  href="tel:998 90 253 77 53"
                >
                  <Tel_icons />
                  +998 90 253 77 53
                </a>
              </Typography>
            </Stack>
          </Container>
        </div>
      ) : null}

      <div className="header">
        <Container>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            py={"17px"}
          >
            <img
              style={{ maxWidth: "130px" }}
              src={header_svg}
              alt="header_img"
            />
            {inputs ? (
              <Button sx={{ maxWidth: "150px" }} variant="contained">
                <Stack direction={"row"} gap={"12px"} alignItems={"center"}>
                  <Menu_icons />
                  Каталог
                </Stack>
              </Button>
            ) : null}
            {form ? <Form page={"header"} /> : null}

            {!sizedrowers ? (
              <>
                <Stack alignItems={"center"}>
                  <User_icons />
                  <Typography>Войти</Typography>
                </Stack>
                <Stack alignItems={"center"}>
                  <Like_icons />
                  <Typography>Избранное</Typography>
                </Stack>
              </>
            ) : (
              ""
            )}
            {!sizedrower ? (
              <Button>
                <Stack onClick={() => nav("/cart")} alignItems={"center"}>
                  <Badge
                    color="secondary"
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "red",
                        color: "white",
                      },
                    }}
                    badgeContent={0}
                    showZero
                  >
                    <Card_icons />
                  </Badge>
                  <Typography color="black">Корзина</Typography>
                </Stack>
              </Button>
            ) : null}

            {sizedrower ? (
              <>
                {" "}
                <Button onClick={() => toggleDrawer(true)}>
                  <img src={menu_icons_dr} alt="img" />
                </Button>{" "}
                <Drawer
                  anchor="right"
                  style={{ padding: "20px" }}
                  open={open}
                  onClose={() => toggleDrawer(false)}
                >
                  <Stack p={"30px"}>
                    {!inputs ? (
                      <div className="header_top">
                        <Container>
                          <Stack
                            py={"8px"}
                            gap={"24px"}
                            mb={"30px"}
                            alignItems={"center"}
                            justifyContent={"end"}
                          >
                            <Typography
                              fontSize={"16px"}
                              color={COLOR["--m3-sys-light-on-background"]}
                            >
                              Доставка и оплата
                            </Typography>
                            <Typography
                              fontSize={"16px"}
                              color={COLOR["--m3-sys-light-on-background"]}
                            >
                              Пункты выдачи
                            </Typography>
                            <Typography
                              fontSize={"16px"}
                              color={COLOR["--m3-sys-light-on-background"]}
                            >
                              Поддержка
                            </Typography>
                            <Typography
                              fontSize={"16px"}
                              color={COLOR["--m3-sys-light-on-background"]}
                            >
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: COLOR["--m3-sys-light-on-background"],
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "12px",
                                }}
                                href="tel:998 90 253 77 53"
                              >
                                <Tel_icons />
                                +998 90 253 77 53
                              </a>
                            </Typography>
                          </Stack>
                        </Container>
                      </div>
                    ) : null}
                    <Stack direction={"row"} gap={"30px"}>
                      {sizedrower ? (
                        <Button onClick={() => nav("/cart")}>
                          <Stack alignItems={"center"}>
                            <Badge
                              color="secondary"
                              sx={{
                                "& .MuiBadge-badge": {
                                  backgroundColor: "red",
                                  color: "white",
                                },
                              }}
                              badgeContent={0}
                              showZero
                            >
                              <Card_icons />
                            </Badge>
                            <Typography color="black">Корзина</Typography>
                          </Stack>
                        </Button>
                      ) : null}

                      {sizedrowers ? (
                        <>
                          <Stack alignItems={"center"}>
                            <User_icons />
                            <Typography>Войти</Typography>
                          </Stack>
                          <Stack alignItems={"center"}>
                            <Like_icons />
                            <Typography>Избранное</Typography>
                          </Stack>
                        </>
                      ) : null}
                    </Stack>
                    {!inputs ? (
                      <Button
                        sx={{ maxWidth: "150px" }}
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          marginTop: "20px",
                        }}
                        variant="contained"
                      >
                        <Stack
                          direction={"row"}
                          gap={"12px"}
                          alignItems={"center"}
                        >
                          <Menu_icons />
                          Каталог
                        </Stack>
                      </Button>
                    ) : null}
                  </Stack>
                </Drawer>
              </>
            ) : (
              ""
            )}
          </Stack>
        </Container>
      </div>
    </header>
  );
}
