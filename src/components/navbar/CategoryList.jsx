import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const categoryItemsData = [
    {
      title: "headphones",
      imagePath: "/images/shared/desktop/image-headphones.png",
      path: "headphones",
    },
    {
      title: "speakers",
      imagePath: "/images/shared/desktop/image-speakers.png",
      path: "speakers",
    },
    {
      title: "earphones",
      imagePath: "/images/shared/desktop/image-earphones.png",
      path: "earphones",
    },
  ];

  const categoryItems = categoryItemsData.map((item, index) => {
    return <CategoryItem key={index} {...item} />;
  });

  return <ul className="flex flex-col gap-4">{categoryItems}</ul>;
};

export default CategoryList;
