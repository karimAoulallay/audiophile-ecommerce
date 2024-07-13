import { useContext, useEffect, useState } from "react";
import CartSidePanel from "../cartSidePanel/CartSidePanel";
import { CartContext } from "../../contexts/CartProvider";

const CartButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { userCart } = useContext(CartContext);

  useEffect(() => {
    if (isExpanded) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.style.overflowY = "auto";
    }
  }, [isExpanded]);

  const toggleModal = () => {
    setIsExpanded(true);
  };

  const closeSidePanel = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <div className="relative">
        {userCart.length > 0 ? (
          <span className="absolute right-0 top-0 flex h-5 w-5 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-accent-200 text-xs text-grayish-100">
            {userCart.length}
          </span>
        ) : (
          ""
        )}
        <button onClick={toggleModal}>
          <img
            src="/images/shared/desktop/icon-cart.svg"
            alt="shopping cart icon"
          />
        </button>
      </div>
      {isExpanded && (
        <CartSidePanel
          closeSidePanel={closeSidePanel}
          isExpanded={isExpanded}
        />
      )}
    </>
  );
};

export default CartButton;
