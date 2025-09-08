import Slider from "react-slick";
import useGetSider from "../query/useGetSider";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginLeft:"30px", position:"absolute", marginTop:"-4px", right:"40px", zIndex:"1", top:"50%" }}
      onClick={onClick}
    /> 
    
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"  , marginLeft:"30px", position:"absolute", marginTop:"-2px", left:"20px", zIndex:"1", top:"50%"}}
      onClick={onClick}
    />
  );
}

export default function SliceSlider() {
  const { data, isLoading, isError, error } = useGetSider();
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <Slider
          style={{
            maxWidth: "1540px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          {...settings}
        >
          {data.map((item) => (
            <img
              style={{
                maxWidth: "1400px",
                marginLeft: "auto",
                marginRight: "auto",
                position:"relative"
              }}
              key={item.id}
              src={item.img}
              alt="img"
            />
          ))}
        </Slider>
      )}
    </div>
  );
}
