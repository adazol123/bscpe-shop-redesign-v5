import {
  ArrowLeftIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import ButtonLink from "../../UI/Button/Link/ButtonLink";
import ButtonStandard from "../../UI/Button/Standard/ButtonStandard";
import InformationalError from "../../UI/Error/InformationalError";
import TextInput from "../../UI/Input/TextInput";
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

  const router = useRouter()

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
          username: `Unable to validate username: ${values.username}. Please try again.`,
        })
      );
    if (values.fullname.length < 6)
      return setError(
        (prev: any) =>
        (prev = {
          ...prev,
          fullname: `Unable to validate fullname: ${values.fullname}. Please try again.`,
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
      <form className="flex flex-col gap-8">
        <div className='flex flex-col gap-3'>
          {error.fullname ? <InformationalError error={error.fullname} /> : error.username ? <InformationalError error={error.username} /> : null}
          <TextInput
            type={"text"}
            placeholder={"Username"}
            value={values.username}
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


          <TextInput
            type={"text"}
            placeholder={"Fullname"}
            value={values.fullname}
            // className={
            //   error?.fullname
            //     ? "border-rose-200 ring-rose-200"
            //     : "border-neutral-400"
            // }
            // placeholderClassName={
            //   error?.fullname ? "text-rose-400" : "text-neutral-400"
            // }
            // autoComplete="off"
            onChange={(e) => {
              setError((prev) => (prev = { ...prev, fullname: null }));
              handleChange("fullname")(e);
            }}
          />

          <div className='flex flex-col gap-6 my-4'>
            <ButtonStandard
              direction="right"
              disabled={!values.name && !values.fullname}
              className={"text-xs py-4 w-full"}
              onClick={Continue}
            >
              Continue
            </ButtonStandard>
            <ButtonLink type='button' icon={<ArrowLeftIcon className='w-4 h-4' />} onClick={Previous} underline_style='expanded' >Back to Email</ButtonLink>
          </div>
        </div>
      </form>
      {/* <Advisory /> */}
    </>
  );
}

export default PersonalDetails;
