const formatPrice = (price) => {
  if (price) {
    if (price % 1 === 0) {
      return price.toLocaleString("en-US");
    }
    return price.toLocaleString("en-US", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  } else {
    return 0;
  }
};

export default formatPrice;
