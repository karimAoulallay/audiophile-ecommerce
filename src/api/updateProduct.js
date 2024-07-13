const updateProduct = async ({
  accessToken,
  quantityCounter: quantity,
  product_id,
}) => {
  const request = new Request(
    `${import.meta.env.VITE_BASE_API_URL}/api/carts/${product_id}`,
    {
      method: "PUT",
      body: JSON.stringify({ quantity }),
      headers: {
        authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    },
  );

  try {
    const res = await fetch(request);

    if (!res.ok) {
      const error = await res.json();
      throw error;
    }

    const updatedProduct = await res.json();

    return updatedProduct;
  } catch (err) {
    return err;
  }
};

export default updateProduct;
