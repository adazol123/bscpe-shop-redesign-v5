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
      <div className="px-4 py-2  border border-theme-gray-300 border-dashed rounded-md text-marine-500 w-full">
        <h4>Password requirement</h4>
        <div className="text-[0.5em] text-theme-gray-500/80 mt-1 font-light">
          <div className="flex items-center gap-2 leading-3">
            <BadgeCheckIcon
              className={[
                "w-3 h-3",
                passLength ? "text-theme-gray-500" : "text-marine-500",
              ].join(" ")}
            />
            <p className="text-[1em]">Must contain at least 8 or more characters</p>
          </div>
          <div className="flex items-center gap-2 leading-3">
            <BadgeCheckIcon
              className={[
                "w-3 h-3",
                passLowerCase ? "text-theme-gray-500" : "text-marine-500",
              ].join(" ")}
            />
            <p className="text-[1em]">Must contain lowercase/small characters</p>
          </div>
          <div className="flex items-center gap-2 leading-3">
            <BadgeCheckIcon
              className={[
                "w-3 h-3",
                passUpperCase ? "text-theme-gray-500" : "text-marine-500",
              ].join(" ")}
            />
            <p className="text-[1em]">Must contain uppercase/capital characters</p>
          </div>
          <div className="flex items-center gap-2 leading-3">
            <BadgeCheckIcon
              className={[
                "w-3 h-3",
                passNumber ? "text-theme-gray-500" : "text-marine-500",
              ].join(" ")}
            />
            <p className="text-[1em]">Must contain at least 1 numeric value</p>
          </div>
          <div className="flex items-center gap-2 leading-3">
            <BadgeCheckIcon
              className={[
                "w-3 h-3",
                passLength || passNotMatch || isEmpty ? "text-theme-gray-500" : "text-marine-500",
              ].join(" ")}
            />
            <p className="text-[1em]">Password match</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordRequirementInfo;
