import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Home from "./page/home/home";

import Market from "./page/market";
import Campaign from "./page/campaign";
import SingleProduct from "./components/form/SingleProduct";
import ProductPage from "./page/products/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Market />} />
          <Route path="Campaign" element={<Campaign />} />
          <Route path="/:category" element={<ProductPage />} />
          <Route path="/:category/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
