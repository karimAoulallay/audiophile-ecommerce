import { Link } from "react-router-dom";
import LinkButton from "../shared/LinkButton";

const OthersProductCard = ({ name, slug, image }) => {
  return (
    <article className="text-center">
      <picture>
        <source srcSet={image.desktop} media="(min-width: 1024px)" />
        <source srcSet={image.tablet} media="(min-width: 640px)" />
        <img src={image.mobile} alt={name + "image"} className="rounded-md" />
      </picture>
      <h4 className="my-4 text-xl font-bold uppercase text-dark sm:my-5 md:my-6">
        {name}
      </h4>
      <Link
        to={`/category/${slug}`}
        className="bg-accent-200 px-3 py-2 font-bold text-grayish-100 duration-200 hover:bg-accent-100 md:px-5 md:py-3"
      >
        see product
      </Link>
    </article>
  );
};

export default OthersProductCard;
