import { Link, useLocation } from "react-router-dom";
import LinkButton from "../shared/LinkButton";

const ProductsHighlightTwo = () => {
  const location = useLocation();
  return (
    <article className="relative isolate flex aspect-square items-center overflow-hidden rounded-md bg-red-400 p-6 sm:aspect-auto sm:px-12 sm:py-32">
      <picture className="absolute inset-0 -z-10">
        <source
          media="(min-width: 1024px)"
          srcSet="/images/home/desktop/image-speaker-zx7.jpg"
        />
        <source
          media="(min-width: 640px)"
          srcSet="/images/home/tablet/image-speaker-zx7.jpg"
        />
        <img
          src="/images/home/mobile/image-speaker-zx7.jpg"
          alt="speaker image"
          className="h-full object-cover sm:w-full"
        />
      </picture>
      <div className="space-y-8">
        <h3 className="text-3xl font-bold uppercase text-dark sm:text-4xl lg:text-5xl">
          zx7 speaker
        </h3>
        <LinkButton
          {...{
            className:
              "outline outline-2 outline-black hover:bg-black hover:text-grayish-100",
            text: "see product",
            fromLocation: location,
            toLocation: "category/speakers/zx7-speaker",
          }}
        />
      </div>
    </article>
  );
};

export default ProductsHighlightTwo;
