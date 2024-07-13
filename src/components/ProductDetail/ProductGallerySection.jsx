const ProductGallerySection = ({ gallery }) => {
  return (
    <section className="pt-28 sm:pt-36 lg:pt-48">
      <div className="container">
        <div className="gallery-grid">
          <article className="overflow-hidden rounded-md">
            <picture>
              <source
                srcSet={gallery?.first.desktop}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={gallery?.first.tablet}
                media="(min-width: 640px)"
              />
              <img
                className="md:h-full md:w-full"
                src={gallery?.first.mobile}
                alt="product image"
              />
            </picture>
          </article>
          <article className="overflow-hidden rounded-md">
            <picture>
              <source
                srcSet={gallery?.second.desktop}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={gallery?.second.tablet}
                media="(min-width: 640px)"
              />
              <img
                className="md:h-full md:w-full"
                src={gallery?.second.mobile}
                alt="product image"
              />
            </picture>
          </article>
          <article className="overflow-hidden rounded-md">
            <picture>
              <source
                srcSet={gallery?.third.desktop}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={gallery?.third.tablet}
                media="(min-width: 640px)"
              />
              <img
                className="md:h-full md:w-full"
                src={gallery?.third.mobile}
                alt="product image"
              />
            </picture>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductGallerySection;
