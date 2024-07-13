const ProductAboutSection = ({ features, includedItems }) => {
  const boxItems = includedItems?.map((item) => {
    return (
      <li key={item.item} className="text-grayish-500">
        <span className="mr-4 font-bold text-accent-200">{item.quantity}x</span>
        {item.item}
      </li>
    );
  });

  return (
    <section className="pt-28 sm:pt-36 lg:pt-48">
      <div className="container">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-3 lg:gap-24">
          <div className="lg:col-span-2">
            <h3 className="mb-8 text-2xl font-bold uppercase text-dark sm:mb-12 sm:text-3xl md:mb-14 md:text-4xl">
              features
            </h3>
            <p className="whitespace-pre-line text-grayish-500">{features}</p>
          </div>
          <div className="sm:flex lg:block">
            <h3 className="mb-8 text-2xl font-bold uppercase text-dark sm:mb-12 sm:w-1/3 sm:text-3xl md:mb-14 md:text-4xl lg:w-auto">
              in the box
            </h3>
            <ul className="space-y-2">{boxItems}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAboutSection;
