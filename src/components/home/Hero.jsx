import HeroTextContainer from "./HeroTextContainer";

const Hero = () => {
  return (
    <section className="bg-dark">
      <div className="container relative isolate flex h-[calc(100vh-90px)] items-center justify-center lg:justify-start">
        <picture className="absolute right-0 top-1/2 -z-10 h-full -translate-y-1/2 select-none">
          <source
            srcSet="/images/home/desktop/image-hero.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="/images/home/tablet/image-hero.jpg"
            media="(min-width: 640px)"
          />
          <img
            src="/images/home/mobile/image-hero.jpg"
            alt="Hero image"
            className="pointer-events-none h-full w-screen object-cover object-bottom"
          />
        </picture>
        <HeroTextContainer />
      </div>
    </section>
  );
};

export default Hero;
