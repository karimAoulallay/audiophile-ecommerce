import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartProvider";
import cartDataExtracter from "../../utils/cartDataExtracter";
import OrderPopupItem from "./OrderPopupItem";
import calculateGrandTotal from "../../utils/calculateGrandTotal";
import formatPrice from "../../utils/formatPrice";
import clearCart from "../../api/clearCart";
import { AuthContext } from "../../contexts/AuthProvider";

const OrderSuccessPopUp = ({ isSubmitSuccess }) => {
  const [userProducts, setUserProducts] = useState([]);
  const { userCart, setUserCart } = useContext(CartContext);
  const { authUser } = useContext(AuthContext);
  const [grandTotal, setGrandTotal] = useState(0);
  const navigate = useNavigate();
  const modalRef = useRef();

  useEffect(() => {
    const { grandTotal } = calculateGrandTotal(userCart);
    setGrandTotal(grandTotal);
  }, [userCart]);

  useEffect(() => {
    async function fetchUserProducts() {
      const produtcs = await cartDataExtracter(userCart);
      setUserProducts(produtcs);
    }
    fetchUserProducts();
  }, [userCart]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (isSubmitSuccess) {
      modalElement.showModal();
    }
  }, [isSubmitSuccess]);

  const handleFinishOrder = async () => {
    const { accessToken } = authUser;

    try {
      // clear user cart on server
      const updatedCart = await clearCart(accessToken);

      // clear user cart context
      setUserCart(updatedCart.products);

      // redirect user to home page
      navigate("/");
    } catch (err) {
      console.log({ message: err.message });
    }
  };

  return (
    <dialog ref={modalRef} className="rounded-md p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="mb-6">
        <img
          src="/images/shared/desktop/icon-check-mark.svg"
          alt="icon check mark"
        />
      </div>
      <h1 className="mb-6 text-2xl font-bold uppercase text-dark">
        Your order on its <br /> way, thank you !
      </h1>
      <p className="mb-4 text-sm uppercase text-grayish-400">your order</p>
      <div className="mb-4 rounded-md border border-grayish-200 bg-grayish-transparent">
        {userProducts.map((item) => (
          <OrderPopupItem key={item.produtc_id} {...item} />
        ))}
      </div>
      <div>
        <p className="mb-4 text-sm uppercase text-grayish-400">
          your grand total:{" "}
          <span className="font-bold text-dark">
            {formatPrice(grandTotal)} dh
          </span>
        </p>
      </div>
      <div className="mt-4">
        <button
          onClick={handleFinishOrder}
          className="w-full rounded-md bg-accent-200 p-3 font-bold uppercase text-grayish-100 duration-200 hover:bg-accent-100"
        >
          back to home
        </button>
      </div>
    </dialog>
  );
};

export default OrderSuccessPopUp;
