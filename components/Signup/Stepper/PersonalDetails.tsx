import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";
import { ChangeEvent, useState } from "react";
import Input from "../../UI/Input/Input";
import Advisory from "../Advisory";

interface Steps {
  nextStep?: any;
  prevStep?: any;
  handleChange: (type: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  values?: any;
}

function PersonalDetails({ nextStep, prevStep, handleChange, values }: Steps) {
  let [error, setError] = useState({
    username: null,
    fullname: null,
  });

  let Continue = (e: any) => {
    e.preventDefault();
    if (values.username.length < 1)
      return setError(
        (prev: any) => (prev = { ...prev, username: "Username is required" })
      );
    if (values.fullname.length < 1)
      return setError(
        (prev: any) => (prev = { ...prev, fullname: "Fullname is required" })
      );
    if (values.username.length < 5)
      return setError(
        (prev: any) =>
          (prev = {
            ...prev,
            username: "Unable to validate username/display_name",
          })
      );
    if (values.fullname.length < 6)
      return setError(
        (prev: any) =>
          (prev = {
            ...prev,
            fullname: "Unable to validate fullname",
          })
      );

    setError((prev) => (prev = { username: null, fullname: null }));
    nextStep();
  };
  let Previous = (e: any) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <form className="flex flex-col gap-2">
        <Input
          type={"text"}
          label={"Username"}
          defaultValue={values.username}
          autoFocus
          // className={
          //   error?.username
          //     ? "border-rose-200 ring-rose-200"
          //     : "border-neutral-400"
          // }
          // placeholderClassName={
          //   error?.username ? "text-rose-400" : "text-neutral-400"
          // }
          // autoComplete="off"
          onChange={(e: any) => {
            setError((prev) => (prev = { ...prev, username: null }));
            handleChange("username")(e);
          }}
        />
        <div className="h-4 -mt-2 ml-1">
          <p className="text-rose-400 text-[0.68em] ">
            {error?.username && error?.username}
          </p>
        </div>

        <Input
          type={"text"}
          label={"Fullname"}
          defaultValue={values.fullname}
          // className={
          //   error?.fullname
          //     ? "border-rose-200 ring-rose-200"
          //     : "border-neutral-400"
          // }
          // placeholderClassName={
          //   error?.fullname ? "text-rose-400" : "text-neutral-400"
          // }
          // autoComplete="off"
          onChange={(e: any) => {
            setError((prev) => (prev = { ...prev, fullname: null }));
            handleChange("fullname")(e);
          }}
        />
        <div className="h-4 -mt-2 ml-1">
          <p className="text-rose-400 text-[0.65em] ">
            {error?.fullname && error?.fullname}
          </p>
        </div>
        <div className="flex flex-row-reverse items-center justify-between my-2 text-xs">
          <button
            className="flex items-center gap-2 px-4 py-2 my-2 border border-transparent rounded-md text-black/70 bg-gray-200/40 hover:bg-gray-100 hover:border-black/40"
            onClick={Continue}
          >
            Continue <ArrowNarrowRightIcon className="w-5 h-5" />
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 my-2 border border-transparent rounded-md text-black/70 bg-gray-200/40 hover:bg-gray-100 hover:border-black/40"
            onClick={Previous}
          >
            <ArrowNarrowLeftIcon className="w-5" /> Back
          </button>
        </div>
      </form>
      <Advisory />
    </>
  );
}

export default PersonalDetails;
