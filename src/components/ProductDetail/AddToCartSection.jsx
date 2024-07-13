import formatPrice from "../../utils/formatPrice";
import QuantityControl from "./QuantityControl";

const AddToCartSection = ({ image, name, isNew, description, price, _id }) => {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2">
          <picture className="overflow-hidden rounded-md">
            <source media="(min-width: 1024px)" srcSet={image?.desktop} />
            <source media="(min-width: 640px)" srcSet={image?.tablet} />
            <img
              src={image?.mobile}
              alt={name + " image"}
              className="lg:w-full"
            />
          </picture>
          <div className="lg:grid lg:content-center lg:text-left">
            <span className="mb-4 inline-block font-light uppercase tracking-[10px] text-accent-200">
              {isNew ? "new product" : ""}
            </span>
            <h2 className="mb-6 text-4xl font-bold uppercase text-dark lg:text-6xl">
              {name}
            </h2>
            <p className="text-grayish-400">{description}</p>
            <div className="my-8 font-bold md:text-xl">
              $ {formatPrice(price)}
            </div>
            <QuantityControl _id={_id} price={price} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddToCartSection;
