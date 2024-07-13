import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import registerUser from "../../api/registerUser";

const Register = () => {
  const { setAuthUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    password: null,
  });
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");
  const [errors, setErrors] = useState({});
  const nameRef = useRef();
  const navigate = useNavigate();
  const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const nameRegExp = new RegExp("^[a-zA-Z]+$", "g");

  const validateForm = (formData) => {
    let errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    } else if (!nameRegExp.test(formData.name)) {
      errors.name = "Name should only include alphabets";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegExp.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    console.log(errors);

    return errors;
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMessages = validateForm(formData);

    if (Object.keys(errorMessages).length > 0) {
      setErrors(errorMessages);
    } else {
      try {
        const data = await registerUser(formData);
        setAuthUser(data);
        navigate("/", { replace: true });
      } catch (err) {
        console.error(err);
        setSubmitErrorMessage(err.message);
      }
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;

    setFormData((prevValue) => {
      return { ...prevValue, [inputName]: inputValue.trim() };
    });
  };

  return (
    <div className="min-h-screen bg-grayish-100 sm:flex sm:items-center">
      {/* container */}
      <div className="mx-auto grid h-screen grid-rows-[auto_1fr] bg-white p-6 shadow-[0_0_1rem] shadow-slate-200 sm:h-auto sm:w-[520px] sm:rounded-xl md:w-[748px] lg:w-[900px] xl:w-[1004px]">
        <div>
          <img src="/images/shared/logo-dark.svg" alt="Logo" className="w-52" />
        </div>
        <div className="mt-8 grid grid-rows-[auto_1fr] gap-8 md:grid-cols-2 md:grid-rows-1">
          <div className="space-y-4">
            <h1 className="text-4xl font-medium text-dark">
              Create an <span className="text-accent-200">audiophile</span>{" "}
              account
            </h1>
            <p>Enter your credentials</p>
          </div>
          <form
            method="post"
            className="flex h-full flex-col"
            onSubmit={handleSubmit}
          >
            {submitErrorMessage ? (
              <p className="bg-red-100 p-1 font-bold text-red-600">
                {submitErrorMessage}
              </p>
            ) : (
              ""
            )}
            <div className="mb-3">
              <label className="mb-2 inline-block font-bold" htmlFor="name">
                Name :
              </label>
              <input
                ref={nameRef}
                onChange={handleChange}
                name="name"
                id="name"
                type="text"
                className="w-full rounded-md p-3 font-bold outline outline-1 outline-grayish-300 placeholder:text-grayish-500 focus:outline-accent-200"
                placeholder="Enter your name"
              />
              <div className="h-4">
                <p className="text-red-700">{errors?.name}</p>
              </div>
            </div>
            <div className="mb-3">
              <label className="mb-2 inline-block font-bold" htmlFor="email">
                Email :
              </label>
              <input
                onChange={handleChange}
                name="email"
                id="email"
                type="text"
                className="w-full rounded-md p-3 font-bold outline outline-1 outline-grayish-300 placeholder:text-grayish-500 focus:outline-accent-200"
                placeholder="Enter your email"
              />
              <div className="h-4">
                <p className="text-red-700">{errors?.email}</p>
              </div>
            </div>
            <div className="mb-3">
              <label className="mb-2 inline-block font-bold" htmlFor="password">
                Password :
              </label>
              <input
                onChange={handleChange}
                name="password"
                id="password"
                type="password"
                className="w-full rounded-md p-3 font-bold outline outline-1 outline-grayish-300 placeholder:text-grayish-500 focus:outline-accent-200"
                placeholder="Enter your password"
              />
              <div className="h-4">
                <p className="text-red-700">{errors?.password}</p>
              </div>
            </div>
            <div>
              Already have an account?
              <Link
                to="/login"
                className="ml-1 font-bold text-accent-200 duration-200"
              >
                Log in
              </Link>
            </div>
            <div className="mt-auto flex justify-end sm:mt-14">
              <button
                type="submit"
                className="rounded-md bg-accent-200 p-2 px-4 font-bold text-grayish-100 duration-200 hover:bg-accent-100"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
