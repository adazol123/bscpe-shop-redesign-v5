import CardSVG from "./CardSVG";

function VirtualCreditCard({
  type,
  bank,
  card_number,
  card_holder,
  className,
  ...props
}: {
  type: string;
  bank: string;
  card_number: number | string;
  card_holder: string;
  className?: any;
}) {
  return (
    <div className="relative mx-auto text-neutral-500 h-fit">
      <CardSVG className={["w-64 h-48", className].join(" ")} {...props} />
      <p className="absolute top-8 left-5  text-[0.5em] text-neutral-500 font-thin">
        Virtual Card
      </p>
      <p className="absolute text-[0.65em] top-8 right-5  text-right font-light whitespace-nowrap">
        {bank}
      </p>
      <p className="absolute text-base font-light bottom-12 left-5 max-w-[20ch] text-right text-neutral-400">
        {card_number}
      </p>
      <p className="absolute text-[0.6em] font-light bottom-8 left-5 max-w-[20ch] text-right text-neutral-500">
        {card_holder}
      </p>
      <p className="absolute text-lg italic font-thin text-right text-neutral-300 right-5 bottom-8">
        {type || "VISA"}
      </p>
    </div>
  );
}

export default VirtualCreditCard;
