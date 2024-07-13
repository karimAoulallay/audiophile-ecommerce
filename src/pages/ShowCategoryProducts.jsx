import AboutSection from "../components/shared/AboutSection";
import CategorySection from "../components/shared/CategorySection";
import ProductsList from "../components/ShowCategoryProducts/ProductsList";
import HeadTitle from "../components/shared/HeadTitle";
import { useEffect } from "react";

const ShowCategoryProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <HeadTitle />
      <ProductsList />
      <CategorySection />
      <AboutSection />
    </>
  );
};

export default ShowCategoryProducts;
