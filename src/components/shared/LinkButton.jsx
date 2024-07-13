import { Link } from "react-router-dom";

const LinkButton = ({ fromLocation, toLocation, className, text }) => {
  return (
    <Link
      state={fromLocation}
      to={toLocation}
      className={`inline-block px-6 py-3 font-bold uppercase tracking-wider duration-200 sm:px-7 ${className}`}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
