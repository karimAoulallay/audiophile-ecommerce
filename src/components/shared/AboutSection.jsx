const AboutSection = () => {
  return (
    <section className="py-28 sm:py-36 lg:py-48">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <picture className="overflow-hidden rounded-md lg:order-1">
            <source
              media="(min-width: 1024px)"
              srcSet="/images/shared/desktop/image-best-gear.jpg"
            />
            <source
              media="(min-width: 640px)"
              srcSet="/images/shared/tablet/image-best-gear.jpg"
            />
            <img
              src="/images/shared/mobile/image-best-gear.jpg"
              alt=""
              className="lg:w-full"
            />
          </picture>
          <div className=" text-center lg:grid lg:content-center lg:text-left">
            <h3 className="mb-6 text-3xl font-bold uppercase tracking-wider text-dark sm:mx-auto sm:mb-7 sm:max-w-[500px] sm:text-5xl lg:mb-8 lg:max-w-none">
              bringing you the <span className="text-accent-200">best</span>{" "}
              audio gear
            </h3>
            <p className="text-balance text-grayish-400">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
