import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import updateProduct from "../../api/updateProduct";
import { CartContext } from "../../contexts/CartProvider";

const CartSidePanelItemActions = ({ quantity, product_id }) => {
  const [quantityCounter, setQuantityCounter] = useState(quantity);
  const { authUser } = useContext(AuthContext);
  const { setUserCart } = useContext(CartContext);

  const increment = () => {
    setQuantityCounter((prevValue) => prevValue + 1);
  };

  const decrement = () => {
    if (quantityCounter > 1) setQuantityCounter((prevValue) => prevValue - 1);
  };

  const confirmUpdate = async () => {
    const { accessToken } = authUser;
    try {
      const updatedProduct = await updateProduct({
        accessToken,
        quantityCounter,
        product_id,
      });

      setUserCart((prevCart) => {
        const updatedProducts = prevCart.map((p) => {
          if (p.product_id == product_id) {
            return updatedProduct;
          }
          return p;
        });
        return updatedProducts;
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <div className="flex items-center rounded-md border border-grayish-300">
        <button
          className="inline-block px-6 py-1 text-grayish-400"
          onClick={decrement}
        >
          -
        </button>
        <span>{quantityCounter}</span>
        <button
          className="inline-block px-6 py-1 text-grayish-400"
          onClick={increment}
        >
          +
        </button>
      </div>

      {quantity !== quantityCounter && (
        <button
          onClick={confirmUpdate}
          className="flex aspect-square w-9 items-center justify-center rounded-md border border-grayish-300 p-1 duration-200 hover:bg-grayish-200"
        >
          <img src="/images/shared/verify-icon.svg" alt="trash icon" />
        </button>
      )}
    </div>
  );
};

export default CartSidePanelItemActions;
