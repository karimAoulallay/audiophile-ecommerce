import { Link } from "react-router-dom";
import NavTogglerButton from "./navbar/NavTogglerButton";
import PrimaryNavbar from "./navbar/PrimaryNavbar";
import { useState } from "react";
import ProfileButton from "./shared/ProfileButton";
import CartButton from "./shared/CartButton";
import HeaderDropdown from "./home/HeaderDropdown";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggler = () => {
    return setIsExpanded((prevValue) => !prevValue);
  };

  return (
    <header className="relative bg-dark">
      <div className="relative z-20 bg-dark">
        <div className="container">
          <div className="relative flex items-center border-b border-b-neutral-700 py-8 lg:justify-between">
            <NavTogglerButton
              handleToggler={handleToggler}
              isExpanded={isExpanded}
            />
            <Link to="/" className="ml-8 lg:ml-0">
              <img src="/images/shared/logo.svg" alt="logo image" />
            </Link>
            <PrimaryNavbar />
            <div className="ml-auto flex items-center gap-4 lg:ml-0">
              <CartButton />
              <ProfileButton />
            </div>
          </div>
        </div>
      </div>
      {isExpanded && <HeaderDropdown isExpanded={isExpanded} />}
    </header>
  );
};

export default Header;
