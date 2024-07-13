const deleteProduct = async (product_id, accessToken) => {
  const request = new Request(
    `${import.meta.env.VITE_BASE_API_URL}/api/carts/${product_id}`,
    {
      method: "delete",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    },
  );

  try {
    const res = await fetch(request);

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const deleted_product_id = res.json();

    return deleted_product_id;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default deleteProduct;
