import { Link } from "react-router-dom";

const CategoryItem = ({ imagePath, title, path }) => {
  return (
    <li className="relative flex items-center justify-between rounded-lg bg-grayish-100 p-4">
      <div className="space-y-2">
        <h2 className="font-bold uppercase tracking-wide text-dark">{title}</h2>
        <Link
          to={`category/${path}`}
          className="flex items-center gap-2 text-sm font-bold uppercase text-grayish-400 hover:text-accent-200 md:text-base"
        >
          Shop
          <img
            src="/images/shared/desktop/icon-arrow-right.svg"
            alt="arrow icon"
          />
        </Link>
      </div>
      <img src={imagePath} alt={title + " image"} className="w-24" />
    </li>
  );
};

export default CategoryItem;
