import {
  ArrowLeftIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import ButtonLink from "../../UI/Button/Link/ButtonLink";
import ButtonStandard from "../../UI/Button/Standard/ButtonStandard";
import InformationalError from "../../UI/Error/InformationalError";
import TextInput from "../../UI/Input/TextInput";
import { StepperProps, StepperValue } from "./StepForm";



function PersonalDetails({ nextStep, prevStep, handleChange, values }: StepperProps<Omit<StepperValue, 'step'>>) {

  let [error, setError] = useState<
    {
      username: string | null,
      fullname: string | null,
    }>({
      username: null,
      fullname: null,
    });

  let Continue = (e: React.MouseEvent) => {
    e.preventDefault();
    if (values.username.length < 1)
      return setError(
        (prev) => (prev = { ...prev, username: "Username is required" })
      );
    if (values.fullname.length < 1)
      return setError(
        (prev) => (prev = { ...prev, fullname: "Fullname is required" })
      );
    if (values.username.length < 5)
      return setError(
        (prev) =>
        (prev = {
          ...prev,
          username: `Unable to validate username: ${values.username}. Please try again.`,
        })
      );
    if (values.fullname.length < 6)
      return setError(
        (prev) =>
        (prev = {
          ...prev,
          fullname: `Unable to validate fullname: ${values.fullname}. Please try again.`,
        })
      );

    setError((prev) => (prev = { username: null, fullname: null }));
    nextStep();
  };
  let Previous = (e: React.MouseEvent) => {
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
            onChange={(e) => {
              setError((prev) => (prev = { ...prev, username: null }));
              handleChange("username")(e);
            }}
          />


          <TextInput
            type={"text"}
            placeholder={"Fullname"}
            value={values.fullname}
            onChange={(e) => {
              setError((prev) => (prev = { ...prev, fullname: null }));
              handleChange("fullname")(e);
            }}
          />

          <div className='flex flex-col gap-6 my-4'>
            <ButtonStandard
              direction="right"
              disabled={!values.username && !values.fullname}
              className={"text-xs py-4 w-full"}
              onClick={Continue}
            >
              Continue
            </ButtonStandard>
            <ButtonLink type='button' icon={<ArrowLeftIcon className='w-4 h-4' />} onClick={Previous} underline_style='expanded' >Back to email</ButtonLink>
          </div>
        </div>
      </form>
      {/* <Advisory /> */}
    </>
  );
}

export default PersonalDetails;
