import {
  CashIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function PaymentMethod() {
  return (
    <div className="flex w-full gap-2 ">
      <div className=" items-center justify-between min-w-[6.2em] p-2 text-[0.85em] leading-4 bg-white rounded-md shadow border border-gray-400 relative">
        <CheckCircleIcon className="absolute w-4 h-4 -top-[0.4em] -right-[0.45em] " />
        <div className="grid place-items-center">
          <CreditCardIcon className="w-6 h-4 text-gray-500" />
          <div className="text-[0.8em] text-gray-400">
            <p>Credit Card</p>
          </div>
        </div>
      </div>
      <div className=" items-center justify-between min-w-[6.2em] p-2 text-[0.85em] leading-4 bg-gray-50 rounded-md shadow border border-transparent">
        <div className="grid place-items-center">
          <CurrencyDollarIcon className="w-6 h-4 text-gray-600" />
          <div className="text-[0.8em] text-gray-400">
            <p>Paypal</p>
          </div>
        </div>
      </div>
      <div className=" items-center justify-between min-w-[6.2em] p-2 text-[0.85em] leading-4 bg-gray-50 rounded-md shadow whitespace-nowrap border border-transparent">
        <div className="grid place-items-center">
          <CashIcon className="w-6 h-4 text-gray-600" />
          <div className="text-[0.8em] text-gray-400">
            <p>Cash On Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}
