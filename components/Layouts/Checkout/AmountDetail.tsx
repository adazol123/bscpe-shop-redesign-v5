
export default function AmountDetail() {
  let total = 0
  return (
    <div className="grid gap-2 mx-6 my-3">
      <div className="flex flex-col gap-2">
        <div className="flex text-[0.8em] justify-between text-neutral-500/80">
          <p>Delivery fee</p>
          <h3 className="font-medium text-neutral-600 ">
            - FREE
            <span className="font-thin text-neutral-400/80"> </span>
          </h3>
        </div>
        <div className="flex text-[0.8em] justify-between text-neutral-500/80">
          <p>VAT</p>
          <h3 className="font-medium text-neutral-600 ">
            - ₱ {(total * 0.02).toFixed(2)}{" "}
            <span className="text-back/5">(2%)</span>
          </h3>
        </div>
      </div>
      <hr />
      <div className="flex justify-between font-medium text-neutral-800">
        <p>Total</p>
        <h3>₱ {(total - total * 0.05).toFixed(2)}</h3>
      </div>
    </div>
  );
}
