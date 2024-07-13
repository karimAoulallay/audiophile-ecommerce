import CategorySectionProduct from "./CategorySectionProduct";

const CategorySection = () => {
  return (
    <section>
      <div className="container">
        <div
          id="category-section"
          className="grid gap-20 pt-28 text-center sm:grid-cols-3 sm:gap-4 sm:pt-36 lg:gap-8 lg:pt-48"
        >
          <CategorySectionProduct
            imgPath="/images/shared/desktop/image-headphones.png"
            path="headphones"
            title="headphones"
          />
          <CategorySectionProduct
            imgPath="/images/shared/desktop/image-speakers.png"
            path="speakers"
            title="speakers"
          />
          <CategorySectionProduct
            imgPath="/images/shared/desktop/image-earphones.png"
            path="earphones"
            title="earphones"
          />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
