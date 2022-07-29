import { useRouter } from "next/router";
import React from "react";
import { ToggleState } from "../../../utils/context/Toggles/ToggleState";


const FooterSummary = ({
  total,
  totalQuantity,
}: {
  total: number;
  totalQuantity: number;
}) => {
  let router = useRouter();
  const { toggleState, toggleStateHandler } = ToggleState();

  return (
    <div className="flex flex-col gap-1 h-fit">
      <div>
        <table className="w-full border-separate table-fixed border-spacing-2">
          <tbody className="w-full">
            {/* <tr className="text-sm text-gray-500">
            <td>Item[s] in cart</td>
            <td className="text-end">{totalQuantity?.toFixed(0)}</td>
          </tr>
          <tr className="text-sm text-gray-500">
            <td>Discount</td>
            <td className="text-end">40%</td>
          </tr> */}
            <tr className="text-xs font-light ">
              <td>Sub-total</td>
              <td className="text-end">₱ {total?.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        onClick={() => {
          toggleStateHandler!("cart");
          router.push("/checkout");
        }}
        className="w-full p-4 text-gray-200 bg-black/90"
      >
        Checkout
      </button>
      {/* <button
      onClick={() => toggleStateHandler("cart")}
      className="w-full p-4 underline bg-transparent underline-offset-2"
    >
      Cancel
    </button> */}
    </div>
  );
};

export default FooterSummary;