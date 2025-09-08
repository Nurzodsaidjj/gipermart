import { Container } from "@mui/material";
import SliceSlider from "./components/slice-slider";
import HomeCotelog from "./components/home-cotelog";
import {PhoneProducts} from "./components/phone-products";
import Discount from "./discount";
import { LaptopProducts } from "./components/laptop-product";

export default function Home() {
  
  return (
    <main>
      <div className="hero">
       <SliceSlider/>
    </div>
    <div className="cotolog">
      <Container disableGutters>
        <HomeCotelog/>
      </Container>
    </div>
    <div>
      <Container>
        <PhoneProducts/>
      </Container>
    </div>
    <div>
      <Container>
        <Discount/>
      </Container>
    </div>
    <div>
      <Container>
        <LaptopProducts name={"Ноутбуки"} path={"computers"}/>
      </Container>
    </div>
    </main>
  )
}
