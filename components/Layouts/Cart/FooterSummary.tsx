import { useRouter } from "next/router";
import React from "react";
import { ToggleState } from "../../../utils/context/Toggles/ToggleState";
import ButtonStandard from "../../UI/Button/Standard/ButtonStandard";

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
            <tr className="text-sm font-medium ">
              <td>Estimated total</td>
              <td className="text-end">₱ {total?.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex gap-1">
        <ButtonStandard
          className="w-full"
          onClick={() => toggleStateHandler!("pay_now")}
        >
          Pay now
        </ButtonStandard>
        <ButtonStandard
          className="w-full"
          onClick={() => {
            router.push("/checkout");
            toggleStateHandler!("cart");
          }}
          type={"outline"}
        >
          Checkout
        </ButtonStandard>
      </div>
    </div>
  );
};

export default FooterSummary;
