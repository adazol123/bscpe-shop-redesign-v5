import { useRouter } from "next/router";
import React from "react";
import { toggleState } from "../../../features/toggle/toggle-state-slice";
import { selectCurrentuser } from "../../../features/user/user-auth-slice";
import { useAppDispatch, useAppSelector } from "../../../utils/app/hook";

import ButtonStandard from "../../UI/Button/Standard/ButtonStandard";

const FooterSummary = ({
  total,
  totalQuantity,
}: {
  total: number;
  totalQuantity: number;
}) => {
  let router = useRouter();
  let user = useAppSelector(selectCurrentuser)
  const dispatch = useAppDispatch()


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
      <div className="flex">
        <ButtonStandard
          className="w-full"
          onClick={() => {
            router.push(user ? "/checkout" : '/login');
            dispatch(toggleState('cart'));
          }}
        >
          Proceed to Checkout
        </ButtonStandard>
      </div>
    </div>
  );
};

export default FooterSummary;
