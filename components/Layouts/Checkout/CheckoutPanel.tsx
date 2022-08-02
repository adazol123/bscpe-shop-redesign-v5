import { useRouter } from "next/router";
import { useState } from "react";
import AccountState from "../../../utils/context/Account/AccountState";
import ShopState from "../../../utils/context/Shop/ShopState";
import Accordion from "../../UI/Accordion/Accordion";
import ButtonStandard from "../../UI/Button/Standard/ButtonStandard";
import VirtualCreditCard from "../Account/VirtualCard/VirtualCreditCard";
import AmountDetail from "./AmountDetail";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import ShippingDetail from "./ShippingDetail";

const CheckoutPanel = () => {
  const { payment } = AccountState();
  const { clearCart } = ShopState();
  let router = useRouter();
  let [checkoutToggle, setCheckoutToggle] = useState(false);
  let checkoutToggleHandler = () => setCheckoutToggle(!checkoutToggle);

  return (
    <div className="relative  text-sm grid ">
      <Accordion open title="Order Summary">
        <OrderSummary />
      </Accordion>
      <Accordion title="Payment Method">
        <div className="p-2  border border-gray-300 border-dashed rounded-md">
          <PaymentMethod />
          <div
            className="mx-auto w-fit"
            onClick={() => {
              router.replace("/account");
            }}
          >
            <VirtualCreditCard
              type={payment?.defaultCard}
              bank={payment?.bank}
              card_number={payment?.cardNumber}
              card_holder={payment?.cardHolder}
              className={[
                "w-[272px]  snap-center scroll-px-4 fill-neutral-800 drop-shadow-md",
              ].join(" ")}
            />
          </div>
        </div>
      </Accordion>
      <Accordion title="Shipping Address">
        <ShippingDetail />
      </Accordion>

      <div className=" py-4 w-full">
        <AmountDetail />
        <div className="relative bottom-0 flex  w-full gap-2 px-4 text-xs ">
          <ButtonStandard
            className="py-3 w-full"
            onClick={() => {
              clearCart!();
              router.replace("/");
            }}
          >
            Confirm order
          </ButtonStandard>
          <ButtonStandard
            type="outline"
            className="py-3 w-full"
            onClick={() => {
              router.replace("/#product");
            }}
          >
            Cancel
          </ButtonStandard>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPanel;
