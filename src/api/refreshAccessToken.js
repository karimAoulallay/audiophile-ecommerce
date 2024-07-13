const refreshAccessToken = async () => {
  const request = new Request(
    `${import.meta.env.VITE_BASE_API_URL}/api/users/token`,
    {
      method: "POST",
      credentials: "include",
    },
  );

  try {
    const res = await fetch(request);

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const accessToken = await res.json();

    return accessToken;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default refreshAccessToken;
