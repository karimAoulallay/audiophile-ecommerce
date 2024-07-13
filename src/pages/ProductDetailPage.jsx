import { Link, useLocation, useParams } from "react-router-dom";
import AboutSection from "../components/shared/AboutSection";
import CategorySection from "../components/shared/CategorySection";
import { useEffect, useState } from "react";
import AddToCartSection from "../components/ProductDetail/AddToCartSection";
import fetchData from "../api/fetchData";
import ProductAboutSection from "../components/ProductDetail/ProductAboutSection";
import ProductGallerySection from "../components/ProductDetail/ProductGallerySection";
import OtherProductsSection from "../components/ProductDetail/OtherProductsSection";
import GoBackLink from "../components/shared/GoBackLink";
import Loading from "../components/shared/Loading";

const ProductDetailPage = () => {
  const [product, setProduct] = useState({});
  const { product: productSlug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      const product = data.find((product) => product.slug === productSlug);
      setProduct(product);
    }

    getData();
  }, [productSlug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GoBackLink />
      {/* show loading component if product data is loading */}
      {Object.keys(product).length > 0 ? (
        <>
          <AddToCartSection {...product} />
          <ProductAboutSection {...product} />
          <ProductGallerySection gallery={product.gallery} />
          <OtherProductsSection others={product.others} />
        </>
      ) : (
        <Loading message="Loading product data..." />
      )}
      <CategorySection />
      <AboutSection />
    </>
  );
};

export default ProductDetailPage;
