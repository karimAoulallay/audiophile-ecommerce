import { Link, useLocation } from "react-router-dom";

const GoBackLink = () => {
  const location = useLocation();
  return (
    <div className="container pt-12">
      <Link
        to={location.state?.from || "/"}
        className="group flex w-fit gap-2 bg-accent-200 px-3 py-1 font-bold capitalize text-grayish-100 sm:px-4 sm:py-2 lg:px-5"
      >
        <span className="rotate-180 duration-200 group-hover:-translate-x-2">
          <img src="/images/shared/go-back-arrow.svg" alt="go back icon" />
        </span>
        <span>go back</span>
      </Link>
    </div>
  );
};

export default GoBackLink;
