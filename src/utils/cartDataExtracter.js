import fetchData from "../api/fetchData";

const cartDataExtracter = async (userCart) => {
  const productsData = await fetchData();
  const userProducts = [];

  userCart.forEach((userCartProduct) => {
    productsData.forEach((productData) => {
      if (userCartProduct.product_id == productData._id) {
        userProducts.push({ ...userCartProduct, ...productData });
      }
    });
  });
  return userProducts;
};

export default cartDataExtracter;
