import { useContext, useEffect, useState } from "react";
import CartSidePanelItem from "./CartSidePanelItem";
import { CartContext } from "../../contexts/CartProvider";
import { Link, useLocation } from "react-router-dom";
import cartDataExtracter from "../../utils/cartDataExtracter";
import formatPrice from "../../utils/formatPrice";
import calculateGrandTotal from "../../utils/calculateGrandTotal";

const CartSidePanelContent = ({ closeSidePanel }) => {
  const [userProducts, setuserProducts] = useState([]);
  const { userCart } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const { subtotal } = calculateGrandTotal(userCart);
    setSubtotal(subtotal);
  }, [userCart]);

  useEffect(() => {
    async function fetchUserProducts() {
      const products = await cartDataExtracter(userCart);
      setuserProducts(products);
    }
    fetchUserProducts();
  }, [userCart]);

  if (!userCart.length > 0) {
    return (
      <div>
        <p className="mb-4 text-center font-bold text-grayish-400">
          your cart is empty
        </p>
        <img
          className="mx-auto max-w-20"
          src="/images/cart/empty-cart.svg"
          alt="cart"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[1fr_auto]">
      <div className="relative">
        <div className="scroller absolute inset-0 space-y-4 overflow-y-scroll pb-4">
          {userProducts.length > 0
            ? userProducts.map((p) => (
                <CartSidePanelItem key={p.product_id} {...p} />
              ))
            : ""}
        </div>
      </div>
      <div className="mt-4 border-t-2 border-grayish-200 py-4">
        <div className="mb-12 flex justify-between font-bold text-dark">
          <p>Subtotal</p>
          <p>{formatPrice(subtotal)} DH</p>
        </div>
        <Link
          to="checkout"
          state={{ from: location.pathname }}
          onClick={closeSidePanel}
          className="inline-block w-full rounded-md border-2 border-accent-200 bg-accent-200 p-3 text-center font-bold text-grayish-100 duration-200 hover:bg-grayish-100 hover:text-accent-200"
        >
          Continue to checkout
        </Link>
      </div>
    </div>
  );
};

export default CartSidePanelContent;
