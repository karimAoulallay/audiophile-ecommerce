import CategoryList from "../navbar/CategoryList";

const HeaderDropdown = () => {
  return (
    <div
      className={`absolute top-full z-10 w-full rounded-b-md bg-light p-4 lg:hidden`}
    >
      <div className="container">
        <CategoryList />
      </div>
    </div>
  );
};

export default HeaderDropdown;
