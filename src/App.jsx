import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShowCategoryProducts from "./pages/ShowCategoryProducts";
import ProductDetailPage from "./pages/ProductDetailPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Layout from "./layouts/Layout";
import AuthProvider from "./contexts/AuthProvider";
import CartProvider from "./contexts/CartProvider";
import CheckoutPage from "./pages/CheckoutPage";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import ErrorPage from "./pages/ErrorPage";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route>
              <Route path="*" element={<ErrorPage />} />
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                  path="category/:category"
                  element={<ShowCategoryProducts />}
                />
                <Route
                  path="category/:category/:product"
                  element={<ProductDetailPage />}
                />
                <Route element={<ProtectedRoutes />}>
                  <Route path="checkout" element={<CheckoutPage />} />
                </Route>
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
