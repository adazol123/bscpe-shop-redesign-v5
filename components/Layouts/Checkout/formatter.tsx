export function sizeFormater(size = "") {
    let label =
      size?.toLowerCase() === "small"
        ? "S"
        : size?.toLowerCase() === "medium"
        ? "M"
        : size?.toLowerCase() === "large"
        ? "L"
        : "XL";
  
    return (
      <p className="grid w-6 h-6 text-center border border-gray-300 rounded place-items-center">
        <span className="px-1 text-xs leading-4">{label}</span>
      </p>
    );
  }
  
  export function colorFormater(color = "") {
    let colorStype =
      color?.toLowerCase() === "red"
        ? "bg-rose-400"
        : color?.toLowerCase() === "blue"
        ? "bg-blue-400"
        : color?.toLowerCase() === "green"
        ? "bg-emerald-400"
        : "bg-gray-400";
  
    return (
      <>
        <div className={["w-4 h-4 rounded-full m-1", colorStype].join(" ")}>
          {" "}
        </div>
      </>
    );
  }