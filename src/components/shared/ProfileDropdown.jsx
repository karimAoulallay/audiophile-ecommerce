import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { CartContext } from "../../contexts/CartProvider";

const ProfileDropdown = ({ setIsExpanded }) => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const { setUserCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = new Request(
      "https://audiophile-ecommerce-api.onrender.com/api/users/logout",
      {
        method: "post",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${authUser.accessToken}`,
        },
      },
    );

    try {
      const res = await fetch(request);
      const data = await res.json();

      if (!res.ok) {
        throw data;
      }

      // clear user data from context
      setAuthUser({});
      // clear user cart context
      setUserCart([]);

      // close dropdown
      setIsExpanded(false);

      // redirect to home page
      navigate("/", {
        relative: "path",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ul className="absolute right-0 top-[150%] z-20 w-max overflow-hidden rounded-md bg-grayish-600 font-bold capitalize text-grayish-100 outline outline-1 outline-grayish-500">
      {authUser.accessToken ? (
        <>
          <li>
            <form method="post" onSubmit={handleSubmit}>
              <button className="flex p-3 duration-200 hover:bg-grayish-500">
                <img
                  src="/images/shared/logout-icon.svg"
                  alt="register icon"
                  className="mr-3"
                />
                log out
              </button>
            </form>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              to="register"
              className="flex p-3 duration-200 hover:bg-grayish-500"
            >
              <img
                src="/images/shared/register-icon.svg"
                alt="register icon"
                className="mr-3"
              />
              register
            </Link>
          </li>
          <li>
            <Link
              to="login"
              className="flex p-3 duration-200 hover:bg-grayish-500"
            >
              <img
                src="/images/shared/login-icon.svg"
                alt="login icon"
                className="mr-3"
              />
              login
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default ProfileDropdown;
