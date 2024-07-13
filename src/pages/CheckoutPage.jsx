import { useState } from "react";
import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutSummary from "../components/checkout/CheckoutSummary";
import GoBackLink from "../components/shared/GoBackLink";
import OrderSuccessPopUp from "../components/checkout/OrderSuccessPopUp";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentInfo: { number: "", pin: "" },
  });
  const [isSubmitSuccess, setisSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const nameRegExp = new RegExp("[a-zA-Z]+", "g");
  const phoneRegExp = /^\d{10}$/;
  const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const zipRegExp = /^\d{5}$/;
  const addressRegExp = /^[a-zA-Z0-9\s,'-]*$/; // Matches one or more characters, excluding whitespace
  const cityRegExp = addressRegExp; // Reuse the address validation
  const countryRegExp = /^[a-zA-Z ]+$/; // Matches letters and spaces
  const paymentNumberRegExp = /^\d{9}$/; // Matches credit card format
  const paymentPinRegExp = /^\d{4,8}$/; // Matches 4 to 8 digits

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (!nameRegExp.test(formData.name)) {
      errors.name = "Name should only include alphabets";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegExp.test(formData.phone)) {
      errors.phone = "Phone number is invalid (must be 10 digits)";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegExp.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required";
    } else if (!addressRegExp.test(formData.address)) {
      errors.address = "Invalid address format";
    }

    if (!formData.zip.trim()) {
      errors.zip = "ZIP code is required";
    } else if (!zipRegExp.test(formData.zip)) {
      errors.zip = "ZIP code must be 5 digits";
    }

    if (!formData.city.trim()) {
      errors.city = "City is required";
    } else if (!cityRegExp.test(formData.city)) {
      errors.city =
        "City name can only contain letters, spaces, and some punctuation";
    }

    if (!formData.country.trim()) {
      errors.country = "Country is required";
    } else if (!countryRegExp.test(formData.country)) {
      errors.country = "Country name can only contain letters and spaces";
    }

    if (formData.paymentInfo !== null) {
      if (!formData.paymentInfo.number.trim()) {
        errors.paymentInfo = { ...errors.paymentInfo }; // Nested object handling
        errors.paymentInfo.number = "Payment number is required";
      } else if (!paymentNumberRegExp.test(formData.paymentInfo.number)) {
        errors.paymentInfo = { ...errors.paymentInfo }; // Nested object handling again
        errors.paymentInfo.number = "Invalid payment number format";
      }

      if (!formData.paymentInfo.pin.trim()) {
        errors.paymentInfo = { ...errors.paymentInfo }; // Nested object handling
        errors.paymentInfo.pin = "PIN is required";
      } else if (!paymentPinRegExp.test(formData.paymentInfo.pin)) {
        errors.paymentInfo.pin = "PIN must be between 4 and 8 digits";
      }
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessages = validateForm(formData);
    setErrors(errorMessages);

    if (!Object.keys(errorMessages).length > 0) {
      setisSubmitSuccess(true);
    }
  };

  return (
    <div className="bg-grayish-100">
      <GoBackLink />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 py-12 md:grid-cols-[2fr_1fr]">
            <CheckoutForm
              formData={formData}
              setFormData={setFormData}
              errors={errors}
            />
            <CheckoutSummary />
          </div>
        </form>
      </div>
      <OrderSuccessPopUp isSubmitSuccess={isSubmitSuccess} />
    </div>
  );
};

export default CheckoutPage;
