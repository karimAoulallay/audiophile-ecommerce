const clearCart = async (accessToken) => {
  const request = new Request(
    `${import.meta.env.VITE_BASE_API_URL}/api/carts/clear`,
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
      const error = res.json();
      throw new Error(error);
    }

    const updatedCart = res.json();
    return updatedCart;
  } catch (err) {
    throw new Error(err);
  }
};

export default clearCart;
