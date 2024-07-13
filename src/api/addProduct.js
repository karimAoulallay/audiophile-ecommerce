const addProduct = async ({ requestData, accessToken }) => {
  const request = new Request(
    `${import.meta.env.VITE_BASE_API_URL}/api/carts`,
    {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    },
  );

  try {
    const res = await fetch(request);

    if (!res.ok) {
      const error = res.json();
      throw new Error(error.message);
    }

    const newProduct = await res.json();

    return newProduct;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default addProduct;
