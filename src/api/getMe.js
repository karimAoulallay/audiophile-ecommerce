const getMe = async (accessToken) => {
  const request = new Request(
    `${import.meta.env.VITE_BASE_API_URL}/api/users`,
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
    },
  );

  try {
    const res = await fetch(request);

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const userData = await res.json();

    return userData;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
};

export default getMe;
