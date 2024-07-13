async function fetchData() {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/api/products`,
  );
  if (!response.ok) {
    throw {
      message: response.message,
      status: response.status,
      statusText: response.statusText,
    };
  }
  const data = await response.json();

  const products = data.map((product) => product);

  return products;
}

export default fetchData;
