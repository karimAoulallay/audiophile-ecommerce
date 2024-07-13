import OthersProductCard from "./OthersProductCard";

const OtherProductsSection = ({ others }) => {
  const products = others?.map((product) => (
    <OthersProductCard {...product} key={product.name} />
  ));

  return (
    <section className="pt-28 sm:pt-36 lg:pt-48">
      <div className="container">
        <h3 className="mb-12 text-center text-2xl font-bold uppercase sm:text-3xl md:mb-16 md:text-4xl">
          you may also like
        </h3>
        <div className="grid gap-16 sm:grid-cols-3">{products}</div>
      </div>
    </section>
  );
};

export default OtherProductsSection;
