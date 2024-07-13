import { useLocation } from "react-router-dom";
import LinkButton from "../shared/LinkButton";

const ProductsHighlightThree = () => {
  const location = useLocation();
  return (
    <article className="grid gap-6">
      <div className="overflow-hidden rounded-md sm:aspect-square lg:aspect-auto">
        <picture className="sm:w-full">
          <source
            media="(min-width: 1024px)"
            srcSet="/images/home/desktop/image-earphones-yx1.jpg"
          />
          <source
            media="(min-width: 640px)"
            srcSet="/images/home/tablet/image-earphones-yx1.jpg"
          />
          <img
            src="/images/home/mobile/image-earphones-yx1.jpg"
            alt="earphones image"
            className="sm:h-full sm:w-full"
          />
        </picture>
      </div>
      <div className="flex items-center rounded-md bg-grayish-100 p-6 py-12 sm:px-12">
        <div className="space-y-8">
          <h3 className="text-3xl font-bold uppercase text-dark sm:text-4xl lg:text-5xl">
            yx1 earphones
          </h3>
          <LinkButton
            {...{
              className:
                "outline outline-2 outline-black hover:bg-black hover:text-grayish-100",
              fromLocation: location,
              toLocation: "category/earphones/yx1-earphones",
              text: "see product",
            }}
          />
        </div>
      </div>
    </article>
  );
};

export default ProductsHighlightThree;
