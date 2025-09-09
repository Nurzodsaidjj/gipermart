import React, { useState, useEffect } from "react";
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
import menu_icons_dr from "../../assets/svg/menu.svg";
import Catalog from "../../page/home/components/home-cotelog";
import axios from "axios";

export default function Header() {
  const [open, setopen] = React.useState(false);
  const sizedrower = useMediaQuery("(max-width:1229px)");
  const sizedrowers = useMediaQuery("(max-width:1021px)");
  const inputs = useMediaQuery("(min-width:695px)");
  const form = useMediaQuery("(min-width:540px)");
  const [openCatalog, setOpenCatalog] = React.useState(false);
  const nav = useNavigate();

  // --- SEARCH LOGIC START ---
  const [search, setSearch] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("https://market-backend-zeta.vercel.app/all").then((res) => {
      setAllProducts(res.data);
    });
  }, []);

  useEffect(() => {
    if (search.trim().length === 0) {
      setResults([]);
      return;
    }
    const filtered = allProducts.filter((item) =>
      item.title?.toLowerCase().includes(search.toLowerCase())
    );
    setResults(filtered);
  }, [search, allProducts]);

  const handleSelect = (item) => {
    nav(`/${item.category}/${item.id}`);
    setSearch("");
    setResults([]);
  };
  // --- SEARCH LOGIC END ---

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

      <div className="header" style={{ position: "relative" }}>
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
              <Button
                sx={{ maxWidth: "150px" }}
                variant="contained"
                onClick={() => setOpenCatalog(true)}
              >
                <Stack direction={"row"} gap={"12px"} alignItems={"center"}>
                  <Menu_icons />
                  Каталог
                </Stack>
              </Button>
            ) : null}

            {/* --- SEARCH INPUT START --- */}
            {form ? (
              <div style={{ position: "relative", width: 250 }}>
                <input
                  type="text"
                  placeholder="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    padding: "8px",
                    width: "100%",
                    borderRadius: "6px",
                    border: "1px solid #eee",
                  }}
                />
                {results.length > 0 && (
                  <ul
                    style={{
                      position: "absolute",
                      background: "#fff",
                      border: "1px solid #eee",
                      width: "100%",
                      zIndex: 1000,
                      listStyle: "none",
                      margin: 0,
                      padding: "8px",
                      maxHeight: "320px",
                      overflowY: "auto",
                    }}
                  >
                    {results.slice(0, 8).map((item) => (
                      <li
                        key={item.id}
                        style={{
                          cursor: "pointer",
                          padding: "4px 0",
                          borderBottom: "1px solid #f3f3f3",
                        }}
                        onClick={() => handleSelect(item)}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : null}
            {/* --- SEARCH INPUT END --- */}

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
                    {inputs ? (
                      <Button
                        sx={{ maxWidth: "150px" }}
                        variant="contained"
                        onClick={() => setOpenCatalog(true)}
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
                {form ? <Form page={"header"} /> : null}
              </>
            ) : (
              ""
            )}
            <Catalog
              open={openCatalog}
              handleClose={() => setOpenCatalog(false)}
            />
          </Stack>
        </Container>
      </div>
    </header>
  );
}
