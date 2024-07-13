import ProductsHighlightOne from "./ProductsHighlightOne";
import ProductsHighlightThree from "./ProductsHighlightThree";
import ProductsHighlightTwo from "./ProductsHighlightTwo";

const ProductsHighlight = () => {
  return (
    <section className="pt-28 sm:pt-36 lg:pt-48">
      <div className="container">
        <div className="products-grid grid gap-6">
          <ProductsHighlightOne />
          <ProductsHighlightTwo />
          <ProductsHighlightThree />
        </div>
      </div>
    </section>
  );
};

export default ProductsHighlight;
