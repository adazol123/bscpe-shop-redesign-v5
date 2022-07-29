import React, { useState } from "react";

const useQuantity = () => {
  let [quantity, setQuantity] = useState(1);

  let addQuantity = () => {
    setQuantity((count) => count + 1);
  };
  let minusQuantity = () => {
    setQuantity((count) => count - 1);
    if (quantity < 2) {
      setQuantity(1);
    }
  };
  return { quantity, setQuantity, addQuantity, minusQuantity };
};

export default useQuantity;
