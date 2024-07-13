import { Link, useLocation } from "react-router-dom";

const ProductCard = ({
  categoryImage,
  name,
  isNew,
  description,
  slug,
  category,
}) => {
  const location = useLocation();

  return (
    <article className="flex flex-col gap-8 lg:flex-row lg:gap-12 lg:even:flex-row-reverse">
      <div className="group overflow-hidden rounded-lg lg:flex-1">
        <picture>
          <source media="(min-width: 1024px)" srcSet={categoryImage.desktop} />
          <source media="(min-width: 640px)" srcSet={categoryImage.tablet} />
          <img
            src={categoryImage.mobile}
            alt={name}
            className="duration-200 group-hover:scale-110"
          />
        </picture>
      </div>
      <div className="space-y-6 text-center lg:grid lg:flex-1 lg:content-center lg:justify-items-start lg:text-left">
        <span className="text-xl font-thin uppercase tracking-widest text-accent-200 sm:text-2xl">
          {isNew ? "new product" : ""}
        </span>
        <h2 className="text-2xl font-bold uppercase sm:text-3xl lg:text-4xl">
          {name}
        </h2>
        <p className="text-balance text-grayish-400">{description}</p>
        <Link
          to={`/category/${category}/${slug}`}
          state={{ from: location }}
          className="inline-block bg-accent-200 px-6 py-3 font-bold uppercase text-light duration-200 hover:bg-accent-100 lg:px-8 lg:py-4"
        >
          see product
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
