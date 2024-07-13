import formatPrice from "../../utils/formatPrice";

const OrderPopupItem = ({ name, quantity, cartImage, unit_price }) => {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-grayish-200 p-4 first:border-none">
      <div className="flex-1">
        <p className="font-bold text-grayish-500">{name}</p>
        <div className="flex justify-between text-grayish-400">
          <span>x{quantity}</span>
          <span>{formatPrice(quantity * unit_price)} DH</span>
        </div>
      </div>
      <div className="overflow-hidden rounded-md border">
        <img src={cartImage} alt={name} className="w-16" />
      </div>
    </div>
  );
};

export default OrderPopupItem;
