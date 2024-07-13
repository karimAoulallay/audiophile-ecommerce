import AboutSection from "../components/shared/AboutSection";
import CategorySection from "../components/shared/CategorySection";
import Hero from "../components/home/Hero";
import ProductsHighlight from "../components/home/ProductsHighlight";

const Home = () => {
  return (
    <>
      <Hero />
      <CategorySection />
      <ProductsHighlight />
      <AboutSection />
    </>
  );
};

export default Home;
