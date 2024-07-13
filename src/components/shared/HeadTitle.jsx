import { useParams } from "react-router";

const HeadTitle = () => {
  const { category: title } = useParams();

  return (
    <section className="bg-dark">
      <div className="container">
        <h1
          className="py-12 text-center text-2xl font-bold uppercase text-grayish-100
        sm:py-16 sm:text-4xl
        lg:py-20 lg:text-5xl"
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default HeadTitle;
