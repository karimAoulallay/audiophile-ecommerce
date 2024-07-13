import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartProvider";
import SummaryItem from "./SummaryItem";
import cartDataExtracter from "../../utils/cartDataExtracter";
import calculateGrandTotal from "../../utils/calculateGrandTotal";
import formatPrice from "../../utils/formatPrice";

const CheckoutSummary = () => {
  const { userCart } = useContext(CartContext);
  const [userProducts, setUserProducts] = useState([]);
  const [billingDetails, setBillingDetails] = useState({});

  useEffect(() => {
    async function fetchUserProducts() {
      const produtcs = await cartDataExtracter(userCart);
      setUserProducts(produtcs);
    }
    fetchUserProducts();
  }, [userCart]);

  // calcuate subtotal and VAT
  useEffect(() => {
    setBillingDetails(calculateGrandTotal(userCart));
  }, [userCart]);

  return (
    <div className="h-fit rounded-md p-4 md:bg-white xl:p-8">
      <h1 className="mb-6 text-3xl font-bold uppercase text-dark">summary</h1>
      <div className="flex flex-col gap-4">
        {userProducts.length > 0
          ? userProducts.map((p) => <SummaryItem key={p.product_id} {...p} />)
          : "Cart is empty"}
      </div>
      <div className="mt-6 space-y-1">
        <div className="flex justify-between">
          <p className="font-thin uppercase text-grayish-400">total</p>
          <p className="font-bold text-dark">
            {formatPrice(formatPrice(billingDetails?.subtotal))} DH
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-thin uppercase text-grayish-400">shipping</p>
          <p className="font-bold text-dark">
            {formatPrice(billingDetails?.shippingPrice)} DH
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-thin uppercase text-grayish-400">vat (included)</p>
          <p className="font-bold text-dark">
            {formatPrice(billingDetails?.varIncluded)} DH
          </p>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <p className="font-thin uppercase text-grayish-400">grand total</p>
        <p className="font-bold text-accent-200">
          {formatPrice(billingDetails?.grandTotal)} DH
        </p>
      </div>
      <div className="mt-8">
        <button
          disabled={!userProducts.length > 0}
          className="inline-block w-full bg-accent-200 p-2 font-bold uppercase text-grayish-100 duration-200 hover:bg-accent-100 disabled:cursor-not-allowed disabled:bg-grayish-400 lg:p-3"
        >
          continue & pay
        </button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
