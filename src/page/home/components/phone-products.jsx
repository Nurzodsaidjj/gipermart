import {
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import Like_icons from "../../../assets/icon/like_icons";
import Card_icons from "../../../assets/icon/card_icons";
import Left_icons from "../../../assets/icon/left_icons";
import Right_icons from "../../../assets/icon/right_icons";
import { Link } from "react-router-dom";
import { useGetPhones } from "../query/useGetPhones";
import Product from "../../../components/product";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "-55px",
        right: "55px",
      }}
      onClick={onClick}
    >
      <IconButton>
        <Right_icons />
      </IconButton>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "90%",
        top: "-55px",
      }}
      onClick={onClick}
    >
      <IconButton>
        <Left_icons />
      </IconButton>
    </div>
  );
}

export function PhoneProducts({ name, path = "phones" }) {
  const { data, isLoading, isError, error } = useGetPhones(path);

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Stack position={"relative"} my={"48px"}>
        <Typography variant="h3" fontSize={"24px"} fontWeight={600}>
          {name}
        </Typography>

        <Slider {...settings}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            data?.map((item) => (
              <Stack
                key={item.id}
                my={"18px"}
                position={"relative"}
                direction={"row"}
                width={"100%"}
              >
                <Link to={`/${item.category || path}/${item.id}`} style={{ textDecoration: "none", color: "black" }}>
                  <Product item={item} category={item.category || path} />
                </Link>
              </Stack>
            ))
          )}
        </Slider>
      </Stack>
    </Container>
  );
}
