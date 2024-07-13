const CheckoutForm = ({ formData, setFormData, errors }) => {
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      if (name === "number" || name === "pin") {
        const prevInfo = prevData.paymentInfo;
        return { ...prevData, paymentInfo: { ...prevInfo, [name]: value } };
      }
      return { ...prevData, [name]: value };
    });
  };

  const handlePaymentinfo = (e) => {
    const { id } = e.target;

    setFormData((prevData) => {
      if (id === "e-money") {
        return { ...prevData, paymentInfo: { number: "", pin: "" } };
      }
      return { ...prevData, paymentInfo: null };
    });
  };

  return (
    <div className="rounded-md p-4 md:bg-white xl:p-8">
      <h1 className="mb-4 text-3xl font-bold uppercase text-dark">checkout</h1>
      <p className="mb-3 font-bold uppercase text-accent-200">
        billing details
      </p>
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 inline-block font-bold capitalize text-dark"
          >
            name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleFormData}
            value={formData.name}
            placeholder="Abdelkarim Aoulallay"
            className="w-full rounded-md p-3 font-semibold outline outline-1 outline-grayish-200 focus:outline-accent-200"
          />
          <div className="h-4">
            <p className="text-red-700">{errors?.name}</p>
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 inline-block font-bold capitalize text-dark"
          >
            email address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleFormData}
            placeholder="abdelkarim@mail.com"
            className="w-full rounded-md p-3 font-semibold outline outline-1 outline-grayish-200 focus:outline-accent-200"
          />
          <div className="h-4">
            <p className="text-red-700">{errors?.email}</p>
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 inline-block font-bold capitalize text-dark"
          >
            phone number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleFormData}
            placeholder="06xxxxxxxx"
            className="w-full rounded-md p-3 font-semibold outline outline-1 outline-grayish-200 focus:outline-accent-200"
          />
          <div className="h-4">
            <p className="text-red-700">{errors?.phone}</p>
          </div>
        </div>
      </div>
      <p className="mb-3 font-bold uppercase text-accent-200">shipping info</p>
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <div className="col-span-2">
          <label
            htmlFor="address"
            className="mb-2 inline-block font-bold capitalize text-dark"
          >
            address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleFormData}
            placeholder="morocco casablanca"
            className="w-full rounded-md p-3 font-semibold outline outline-1 outline-grayish-200 focus:outline-accent-200"
          />
          <div className="h-4">
            <p className="text-red-700">{errors?.address}</p>
          </div>
        </div>
        <div>
          <label
            htmlFor="zip-code"
            className="mb-2 inline-block font-bold capitalize text-dark"
          >
            ZIP Code
          </label>
          <input
            type="text"
            id="zip-code"
            name="zip"
            onChange={handleFormData}
            value={formData.zip}
            placeholder="20000"
            className="w-full rounded-md p-3 font-semibold outline outline-1 outline-grayish-200 focus:outline-accent-200"
          />
          <div className="h-4">
            <p className="text-red-700">{errors?.zip}</p>
          </div>
        </div>
        <div>
          <label
            htmlFor="city"
            className="mb-2 inline-block font-bold capitalize text-dark"
          >
            city
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleFormData}
            placeholder="Casablanca"
            className="w-full rounded-md p-3 font-semibold outline outline-1 outline-grayish-200 focus:outline-accent-200"
          />
          <div className="h-4">
            <p className="text-red-700">{errors?.city}</p>
          </div>
        </div>
        <div>
          <label
            htmlFor="country"
            className="mb-2 inline-block font-bold capitalize text-dark"
          >
            country
          </label>
          <input
            type="text"
            id="country"
            value={formData.country}
            name="country"
            onChange={handleFormData}
            placeholder="Morocco"
            className="w-full rounded-md p-3 font-semibold outline outline-1 outline-grayish-200 focus:outline-accent-200"
          />
          <div className="h-4">
            <p className="text-red-700">{errors?.country}</p>
          </div>
        </div>
      </div>
      <p className="mb-3 font-bold uppercase text-accent-200">
        payment details
      </p>
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <div className="col-span-1">
          <span className="font-bold capitalize text-dark">payment method</span>
        </div>
        <div className="col-start-2">
          <label
            htmlFor="e-money"
            className="inline-block w-full space-x-4 rounded-md border border-grayish-200 p-3"
          >
            <input
              type="radio"
              id="e-money"
              onChange={handlePaymentinfo}
              checked={formData.paymentInfo !== null}
            />
            <span className="font-bold capitalize text-dark">e-money</span>
          </label>
        </div>
        <div className="col-start-2">
          <label
            htmlFor="cash-on-delivery"
            className="inline-block w-full space-x-4 rounded-md border border-grayish-200 p-3"
          >
            <input
              type="radio"
              id="cash-on-delivery"
              onChange={handlePaymentinfo}
              checked={formData.paymentInfo === null}
            />
            <span className="font-bold capitalize text-dark">
              cash on delivery
            </span>
          </label>
        </div>
      </div>
      {formData.paymentInfo !== null ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="number"
              className="mb-2 inline-block font-bold capitalize text-dark"
            >
              e-money number
            </label>
            <input
              type="text"
              id="number"
              name="number"
              onChange={handleFormData}
              value={formData.paymentInfo.number}
              placeholder="238521993"
              className="w-full rounded-md p-3 font-semibold outline outline-1 outline-grayish-200 focus:outline-accent-200"
            />
            <div className="h-4">
              <p className="text-red-700">{errors?.paymentInfo?.number}</p>
            </div>
          </div>
          <div>
            <label
              htmlFor="pin"
              className="mb-2 inline-block font-bold capitalize text-dark"
            >
              e-money pin
            </label>
            <input
              type="text"
              id="pin"
              name="pin"
              onChange={handleFormData}
              value={formData.paymentInfo.pin}
              placeholder="3652"
              className="w-full rounded-md p-3 font-semibold outline outline-1 outline-grayish-200 focus:outline-accent-200"
            />
            <div className="h-4">
              <p className="text-red-700">{errors?.paymentInfo?.pin}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-8">
          <div>
            <img
              src="/images/checkout/icon-cash-on-delivery.svg"
              alt="icon cash on delivery"
              className="w-32"
            />
          </div>
          <p className="text-grayish-400">
            The <b>Cash on Delivery</b> option enables you to pay in cash when
            our delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
