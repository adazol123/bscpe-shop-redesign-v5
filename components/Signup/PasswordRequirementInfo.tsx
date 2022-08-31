import { BadgeCheckIcon } from "@heroicons/react/solid";

function PasswordRequirementInfo({
  passLength,
  passLowerCase,
  passUpperCase,
  passNumber,
  passNotMatch,
  isEmpty
}: {
  passLength: boolean;
  passLowerCase: boolean;
  passUpperCase: boolean;
  passNumber: boolean;
  passNotMatch: boolean;
  isEmpty: boolean;
}) {
  console.log(isEmpty)
  return (

    <>
      <div className="px-4 py-2 text-[0.62em] border border-theme-gray-300 border-dashed rounded-md text-marine-500 w-full">
        <h3>Password requirement</h3>
        <div className="text-[0.95em] text-theme-gray-500/80 mt-1 font-light">
          <div className="flex items-center gap-2 leading-3">
            <BadgeCheckIcon
              className={[
                "w-3 h-3",
                passLength ? "text-theme-gray-500" : "text-marine-500",
              ].join(" ")}
            />
            <p>Must contain at least 8 or more characters</p>
          </div>
          <div className="flex items-center gap-2 leading-3">
            <BadgeCheckIcon
              className={[
                "w-3 h-3",
                passLowerCase ? "text-theme-gray-500" : "text-marine-500",
              ].join(" ")}
            />
            <p>Must contain lowercase/small characters</p>
          </div>
          <div className="flex items-center gap-2 leading-3">
            <BadgeCheckIcon
              className={[
                "w-3 h-3",
                passUpperCase ? "text-theme-gray-500" : "text-marine-500",
              ].join(" ")}
            />
            <p>Must contain uppercase/capital characters</p>
          </div>
          <div className="flex items-center gap-2 leading-3">
            <BadgeCheckIcon
              className={[
                "w-3 h-3",
                passNumber ? "text-theme-gray-500" : "text-marine-500",
              ].join(" ")}
            />
            <p>Must contain at least 1 numeric value</p>
          </div>
          <div className="flex items-center gap-2 leading-3">
            <BadgeCheckIcon
              className={[
                "w-3 h-3",
                passLength || passNotMatch || isEmpty ? "text-theme-gray-500" : "text-marine-500",
              ].join(" ")}
            />
            <p>Password match</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordRequirementInfo;
