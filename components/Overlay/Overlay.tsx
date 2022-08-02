import React from "react";
import ShoppingCart from "../Layouts/Cart/ShoppingCart";
import PayNow from "../Layouts/Checkout/PayNow/PayNow";
import ProductSelectedModal from "../Layouts/Products/ProductSelectedModal";
import Sidebar from "../Layouts/Sidebar/Sidebar";

const Overlay = () => {
  return (
    <>
      <Sidebar />
      <ShoppingCart />
      <ProductSelectedModal />
      <PayNow />
    </>
  );
};

export default Overlay;
