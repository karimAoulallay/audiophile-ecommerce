const loginUser = async (formData) => {
  const request = new Request(
    `${import.meta.env.VITE_BASE_API_URL}/api/users/login`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      body: JSON.stringify(formData),
    },
  );

  try {
    const res = await fetch(request);

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const user = await res.json();
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default loginUser;
