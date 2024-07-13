const calculateGrandTotal = (userCart) => {
  let subtotal = 0;
  let varIncluded;
  let grandTotal;
  const shippingPrice = 50;

  userCart.forEach((product) => {
    subtotal += product.quantity * product.unit_price;
  });

  varIncluded = subtotal * 0.2;
  grandTotal = varIncluded + subtotal + shippingPrice;

  return { subtotal, grandTotal, varIncluded, shippingPrice };
};

export default calculateGrandTotal;
