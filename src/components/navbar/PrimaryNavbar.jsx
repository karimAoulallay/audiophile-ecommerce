import { NavLink } from "react-router-dom";

const PrimaryNavbar = () => {
  return (
    <nav className="absolute  left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center text-grayish-100 lg:block">
      <ul className="flex gap-4 text-sm font-bold uppercase md:gap-8">
        <li>
          <NavLink
            to="/"
            className="tracking-wide duration-200 hover:text-accent-200"
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="category/headphones"
            className="tracking-wide duration-200 hover:text-accent-200"
          >
            headphones
          </NavLink>
        </li>
        <li>
          <NavLink
            to="category/speakers"
            className="tracking-wide duration-200 hover:text-accent-200"
          >
            speakers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="category/earphones"
            className="tracking-wide duration-200 hover:text-accent-200"
          >
            earphones
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNavbar;
