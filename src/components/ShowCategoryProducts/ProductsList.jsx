import { useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchData from "../../api/fetchData";
import ProductCard from "./ProductCard";
import Loading from "../shared/Loading";

const ProductsList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      const products = data.filter((product) => product.category === category);
      setProducts(products);
    }

    getData();
  }, [category]);

  const ProductsList = products.map((product) => (
    <ProductCard key={product._id} {...product} />
  ));

  if (!products.length > 0) {
    return <Loading message="Loading products..." />;
  }

  return (
    <section className="pt-28 sm:pt-36 lg:pt-48">
      <div className="container">
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
          {ProductsList}
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
