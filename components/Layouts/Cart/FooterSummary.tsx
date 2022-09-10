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
    <div className="flex justify-between gap-6 h-fit">
      <div className='text-xs'>

        <p>Estimated total</p>
        <span >₱ {total?.toFixed(2)}</span>

      </div>
      <div >
        <ButtonStandard
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
