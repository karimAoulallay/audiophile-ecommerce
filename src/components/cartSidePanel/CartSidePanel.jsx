import { useContext, useRef } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";
import CartSidePanelContent from "./CartSidePanelContent";

const CartSidePanel = ({ closeSidePanel, isExpanded }) => {
  const { authUser } = useContext(AuthContext);
  const sidePanelRef = useRef();
  const overlayRef = useRef();

  const closePanelAnimation = () => {
    const sidePanel = sidePanelRef.current;
    const overlay = overlayRef.current;

    // add css animations class
    sidePanel.classList.add("side-panel-closing");

    // animate overlay
    overlay.classList.add("opacity-0");

    // fire the closeSidePanel function
    setTimeout(() => {
      closeSidePanel();
    }, 300);
  };

  const handleAnimationEnd = (e) => {
    const sidePanel = e.target;
    // animate box shadow on closing the side panel
    sidePanel.classList.add("shadow-[rgba(250,250,250,0.3)]");
  };

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-dark bg-opacity-50 opacity-50 duration-300"
      ></div>
      <aside
        onAnimationEnd={handleAnimationEnd}
        ref={sidePanelRef}
        className={`side-panel-opening fixed left-full top-0 z-[500] grid h-screen w-screen grid-rows-[auto_1fr] gap-4 bg-grayish-100 p-4 shadow-[0_-3rem_10rem_0_transparent] transition-shadow duration-300 sm:w-[400px] lg:w-[500px]`}
      >
        <div className="flex justify-between border-b border-grayish-300 pb-4">
          <p className="text-xl font-bold text-accent-200 sm:text-2xl md:text-3xl">
            Cart
          </p>
          <button
            onClick={closePanelAnimation}
            className="grid aspect-square place-content-center rounded-md duration-200 hover:bg-grayish-200"
          >
            <img src="/images/shared/close-icon.svg" alt="close icon" />
          </button>
        </div>
        {authUser?.accessToken ? (
          <CartSidePanelContent closeSidePanel={closeSidePanel} />
        ) : (
          <div>
            <p className="mb-4 text-grayish-400">
              Please log in or register to add products to your cart.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                to="register"
                className="inline-block flex-1 p-2 text-center font-bold outline outline-1 outline-dark duration-200 hover:bg-dark hover:text-grayish-100"
              >
                Register
              </Link>
              <span className="text-grayish-400">or</span>
              <Link
                to={"login"}
                className="inline-block flex-1 bg-accent-200 p-2 text-center font-bold text-grayish-100 duration-200 hover:bg-accent-100"
              >
                Log in
              </Link>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartSidePanel;
