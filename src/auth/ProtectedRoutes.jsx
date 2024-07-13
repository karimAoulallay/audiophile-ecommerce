import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthProvider";

const ProtectedRoutes = () => {
  const { authUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser?.accessToken) {
      navigate("/login");
    }
  }, [authUser, navigate]);

  return <Outlet />;
};

export default ProtectedRoutes;
