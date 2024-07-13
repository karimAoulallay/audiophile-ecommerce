const NavTogglerButton = ({ handleToggler, isExpanded }) => {
  return (
    <button onClick={handleToggler} className="lg:hidden">
      <img
        src={`/images/shared/tablet/${isExpanded ? "icon-close-menu.svg" : "icon-hamburger.svg"}`}
        alt="burger icon"
      />
    </button>
  );
};

export default NavTogglerButton;
