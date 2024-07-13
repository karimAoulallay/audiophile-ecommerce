import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [userCart, setUserCart] = useState([]);
  const { authUser } = useContext(AuthContext);

  useEffect(() => {
    const accessToken = authUser?.accessToken;

    async function fetchUserCart() {
      const request = new Request(
        `${import.meta.env.VITE_BASE_API_URL}/api/carts`,
        {
          method: "get",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        },
      );

      try {
        const res = await fetch(request);
        const data = await res.json();

        if (!res.ok) {
          throw data;
        }

        setUserCart(data.products);
      } catch (err) {
        console.error(err);
      }
    }

    if (accessToken) {
      fetchUserCart();
    }
  }, [authUser]);

  return (
    <CartContext.Provider value={{ userCart, setUserCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
