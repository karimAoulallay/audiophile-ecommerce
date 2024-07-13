import { useContext } from "react";
import CartSidePanelItemActions from "./CartSidePanelItemActions";
import { AuthContext } from "../../contexts/AuthProvider";
import deleteProduct from "../../api/deleteProduct";
import { CartContext } from "../../contexts/CartProvider";
import formatPrice from "../../utils/formatPrice";

const CartSidePanelItem = ({
  quantity,
  name,
  unit_price,
  cartImage,
  product_id,
}) => {
  const { authUser } = useContext(AuthContext);
  const { setUserCart } = useContext(CartContext);

  const handleDeleteProduct = async () => {
    const { accessToken } = authUser;

    try {
      const deleted_product_id = await deleteProduct(product_id, accessToken);

      setUserCart((prevCart) =>
        prevCart.filter((p) => p.product_id !== deleted_product_id),
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] gap-4 pr-2">
      <div className="h-fit overflow-hidden rounded-xl border border-grayish-200">
        <img src={cartImage} alt="product image" />
      </div>
      <div>
        <p className="capitalize">{name}</p>
        <CartSidePanelItemActions {...{ quantity, product_id }} />
      </div>
      <div className="flex flex-col items-end gap-2">
        <p>{formatPrice(quantity * unit_price)} DH</p>
        <button
          onClick={handleDeleteProduct}
          className="flex aspect-square w-9 items-center justify-center rounded-md border border-grayish-300 p-2 duration-200 hover:bg-grayish-200"
        >
          <img src="/images/shared/trash-can.svg" alt="trash icon" />
        </button>
      </div>
    </div>
  );
};

export default CartSidePanelItem;
