import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-grayish-100">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-accent-200 lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-dark md:text-4xl">
            {`Something's missing.`}
          </p>
          <p className="mb-4 text-lg font-light text-grayish-400">
            {`Sorry, we can't find that page. You'll find lots to explore on the
            home page.`}
          </p>
          <Link
            to="/"
            className="my-4 inline-flex rounded-lg bg-accent-200 px-5 py-2.5 text-center text-sm font-bold text-grayish-100 hover:bg-accent-100 focus:outline-none focus:ring-4 focus:ring-accent-200"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
