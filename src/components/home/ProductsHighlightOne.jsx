import { Link, useLocation } from "react-router-dom";
import LinkButton from "../shared/LinkButton";

const ProductsHighlightOne = () => {
  const location = useLocation();
  return (
    <article className="highlight-speaker-one relative isolate flex flex-col items-center rounded-md bg-accent-200 px-8 py-12 lg:flex-row lg:overflow-hidden lg:p-0">
      <img
        src="/images/home/desktop/pattern-circles.svg"
        alt="circles image"
        className="absolute inset-0 -z-10"
      />
      <div className="h-full flex-1 place-content-end">
        <img
          src="/images/home/mobile/image-speaker-zx9.png"
          alt="speaker image"
          className="w-44 translate-y-2 sm:w-60 lg:mx-0 lg:ml-auto lg:w-80"
        />
      </div>
      <div className=" flex-1 space-y-6 pt-8 text-center lg:p-20 lg:text-start">
        <h3 className="text-3xl font-bold text-light sm:text-6xl">
          ZX9 <br /> SPEAKER
        </h3>
        <p className="max-w-72 text-grayish-200 sm:text-lg">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <LinkButton
          {...{
            className: "bg-black text-grayish-100 hover:bg-grayish-500",
            text: "see product",
            fromLocation: location,
            toLocation: "category/speakers/zx9-speaker",
          }}
        />
      </div>
    </article>
  );
};

export default ProductsHighlightOne;
