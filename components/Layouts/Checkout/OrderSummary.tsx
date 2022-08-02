import ShopState from "../../../utils/context/Shop/ShopState";
import { colorFormater, sizeFormater } from "./formatter";

export default function OrderSummary() {
  let { carts } = ShopState();

  return (
    <>
      <div className="flex flex-col gap-1 px-0 my-2 overflow-hidden overflow-y-scroll max-h-72">
        {carts.map((product) => {
          return (
            <div
              key={product?.product_id}
              className="flex gap-2 p-1 border border-gray-300 border-dashed rounded-md"
            >
              <div className="w-14 h-14">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="object-cover w-full h-full rounded"
                />
              </div>
              <div className="flex flex-col justify-between flex-1 ">
                <p className="text-xs font-thin text-gray-500 line-clamp-1">
                  {product?.name}
                </p>
                <div className="flex gap-4">
                  <div>
                    <span className="text-[0.65em] text-gray-400">Price</span>
                    <p>
                      {" "}
                      <span className="text-xs font-medium text-gray-500">
                        ₱ {product?.price}.00
                      </span>{" "}
                      x {product?.quantity}
                    </p>
                  </div>
                  <div>
                    <div className="text-[0.65em] text-gray-400">Size</div>
                    <p>
                      <div className="font-medium text-gray-500">
                        {sizeFormater(product?.size)}
                      </div>
                    </p>
                  </div>
                  <div>
                    <div className="text-[0.65em] text-gray-400 ">Color</div>

                    <div className="mt-2 font-medium text-gray-500">
                      {colorFormater(product?.color)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
