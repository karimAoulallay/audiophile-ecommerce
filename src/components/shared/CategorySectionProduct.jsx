import { Link } from "react-router-dom";

const CategorySectionProduct = ({ imgPath, path, title }) => {
  return (
    <Link
      to={"/category/" + path}
      className="group relative rounded-md p-6 pt-20 lg:pt-28"
    >
      <img
        src={imgPath}
        alt={`${title} image`}
        className="absolute left-1/2 top-0 w-32 -translate-x-1/2 -translate-y-1/2 md:w-40 lg:w-52"
      />
      <p className="mb-3 font-bold uppercase tracking-wider">{title}</p>
      <div className="flex items-center justify-center font-semibold uppercase text-grayish-400 group-hover:text-accent-200">
        <span className="mr-2">Shop</span>
        <img
          src="/images/shared/desktop/icon-arrow-right.svg"
          alt="icon arrow"
          className="inline-block duration-200 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
};

export default CategorySectionProduct;
