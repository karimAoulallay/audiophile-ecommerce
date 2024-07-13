import { useLocation } from "react-router-dom";
import LinkButton from "../shared/LinkButton";

const HeroTextContainer = () => {
  const location = useLocation();
  return (
    <div className="text-center lg:text-start">
      <p className="mb-3 uppercase tracking-[.5em] text-grayish-transparent md:text-lg lg:text-xl">
        new product
      </p>
      <h1 className="mb-6 text-4xl font-bold text-light md:text-6xl lg:text-7xl">
        XX99 MARK II <br /> HEADPHONE
      </h1>
      <p className="mb-6 max-w-[400px] text-balance text-grayish-300 md:text-lg">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <LinkButton
        {...{
          className: "bg-accent-200 text-light hover:bg-accent-100",
          text: "see product",
          fromLocation: location,
          toLocation: "category/headphones/xx99-mark-two-headphones",
        }}
      />
    </div>
  );
};

export default HeroTextContainer;
