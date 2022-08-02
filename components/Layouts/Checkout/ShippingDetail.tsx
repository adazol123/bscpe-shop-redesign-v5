import { DocumentAddIcon, MapIcon, PencilAltIcon, PhoneIcon, TruckIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import AccountState from "../../../utils/context/Account/AccountState";

export default function ShippingDetail() {
    let { shipping } = AccountState();
  
    let router = useRouter();
    return (
      <div className="p-2 border border-gray-300 border-dashed rounded-md">
        {shipping ? (
          <div className="flex items-center justify-between p-2 text-[0.85em] leading-4 bg-white rounded-md shadow">
            <div>
              <div className="flex text-[0.9em] gap-1 font-medium">
                <TruckIcon className="w-3" />
                <p>Ship to:</p>
                <p>{shipping?.recipient}</p>
              </div>
              <div className="text-[0.8em] flex gap-1 text-gray-400">
                <MapIcon className="w-3" />
                <p>Address:</p>
                <p>
                  {shipping?.address},{shipping?.city} {shipping?.zipcode}
                </p>
              </div>
              <div className="text-[0.8em] flex gap-1 text-gray-400">
                <PhoneIcon className="w-3" />
                <p>Contact:</p>
                <p>{shipping?.contact || "+639 5645 5466"}</p>
              </div>
            </div>
            <button
              className="text-gray-500"
              onClick={() => {
                router.push("/account/shipping-address");
              }}
            >
              <PencilAltIcon className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center p-4 text-[0.85em] leading-4 bg-white rounded-md shadow gap-1 text-gray-500 cursor-pointer"
            onClick={() => {
              router.push("/account/shipping-address");
            }}
          >
            <p> No Shipping address setup yet</p>
            <p className="flex items-center gap-1 text-gray-400/80 text-[0.8em]">
              <DocumentAddIcon className="w-3 h-3" />
              Configure new shipping address
            </p>
          </div>
        )}
      </div>
    );
  }