import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router";
import addProduct from "../../api/addProduct";
import { CartContext } from "../../contexts/CartProvider";
import ProductAddedToast from "../toasts/ProductAddedToast";

const QuantityControl = ({ _id, price }) => {
  const [quantity, setQuantity] = useState(1);
  const { authUser } = useContext(AuthContext);
  const { setUserCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  }, [showToast]);

  function incrementQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decrementQuantity() {
    setQuantity((prevQuantity) =>
      quantity > 1 ? prevQuantity - 1 : prevQuantity,
    );
  }

  const closeToast = () => {
    setShowToast(false);
  };

  async function handlePostRequest() {
    // if user not authenticated redirect them to login page
    if (!authUser?.accessToken) {
      return navigate("/login");
    }

    const requestData = {
      product_id: _id,
      quantity: quantity,
      unit_price: price,
    };

    const accessToken = authUser?.accessToken;

    try {
      const newProduct = await addProduct({ requestData, accessToken });

      setUserCart((prevCart) => {
        const product = prevCart.find((p) => p.product_id == _id);

        // if product exists in userCart ===> increment product quantity
        if (product) {
          const updatedProducts = prevCart.map((p) => {
            if (p.product_id == _id) {
              const incQuantity = p.quantity + quantity;
              return { ...p, quantity: incQuantity };
            } else {
              return p;
            }
          });
          return updatedProducts;
        }

        // add product to userCart
        return [...prevCart, { product_id: _id, quantity, unit_price: price }];
      });

      setShowToast(true);
    } catch (err) {
      console.error(err);
    }

    setQuantity(1);
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      {showToast ? <ProductAddedToast closeToast={closeToast} /> : ""}
      <div className="flex bg-grayish-200">
        <button onClick={decrementQuantity} className="p-3 px-6">
          -
        </button>
        <div
          className="relative min-w-14 py-3 text-center before:absolute before:left-0 before:h-1/2 before:w-[2px] before:rounded-full before:bg-dark before:content-['']
                after:absolute after:right-0 after:h-1/2 after:w-[2px] after:rounded-full after:bg-dark after:content-['']"
        >
          {quantity}
        </div>
        <button onClick={incrementQuantity} className="p-3 px-6">
          +
        </button>
      </div>
      <button
        onClick={handlePostRequest}
        className="bg-accent-200 p-3 px-6 font-bold uppercase text-grayish-100 duration-200 hover:bg-accent-100"
      >
        add to cart
      </button>
    </div>
  );
};

export default QuantityControl;
