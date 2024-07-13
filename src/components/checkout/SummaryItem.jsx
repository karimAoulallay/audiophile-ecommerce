import formatPrice from "../../utils/formatPrice";

const SummaryItem = ({ name, quantity, unit_price, cartImage, shortName }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-20 overflow-hidden rounded-md">
        <img src={cartImage} alt={name} className="object-cover" />
      </div>
      <div className="flex flex-1 justify-between">
        <div>
          <p className="font-bold text-dark">{shortName}</p>
          <p className="font-semibold text-grayish-400">
            {formatPrice(unit_price)} DH
          </p>
        </div>
        <p className="text-grayish-400">x{quantity}</p>
      </div>
    </div>
  );
};

export default SummaryItem;
