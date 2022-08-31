import { } from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/solid";
import { useState } from "react";

import PersonalDetails from "./PersonalDetails";
import EmailDetails from "./EmailDetails";
import SecurityDetails from "./SecurityDetails";

let labels = ["Email", "Basic Information", "Security"];

const StepForm = () => {
  let [stepper, setStepper] = useState({
    step: 1,
    email: "",
    username: "",
    fullname: "",
    password: "",
    confirm_password: "",
  });

  const { step } = stepper;
  let prevStep = () => {
    setStepper({ ...stepper, step: step - 1 });
    if (step < 2) setStepper({ ...stepper, step: 3 });
  };

  let nextStep = () => {
    setStepper({ ...stepper, step: step + 1 });
    if (step > 2) setStepper({ ...stepper, step: 1 });
  };

  let handleChange = (input: any) => (e: any) => {
    setStepper((prev) => (prev = { ...prev, [input]: e.target.value }));
  };

  const { email, username, fullname, password, confirm_password } = stepper;
  let values = { email, username, fullname, password, confirm_password };

  let handleSteps = (step: number) => {
    switch (step) {
      case 1:
        return (
          <EmailDetails
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <SecurityDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            setStepper={setStepper}
          />
        );
      default:
      // throw new Error("Unknown step");
    }
  };

  return (
    <>
      <div className='flex flex-col gap-8 w-full'>
        <h1 className=" text-2xl font-light text-center text-marine-500">
          Create account
        </h1>
        <div className="relative flex w-full before:absolute before:h-[1px] before:w-[calc(100%-35%)] before:bg-teal-700/20 before:top-[28%] before:left-0 before:mx-[15%]">

          {labels.map((label, index: number) => (
            <div
              className="w-[calc(100%)] 
          relative"
              key={label}
            >
              <div className="grid gap-2 text-[0.5em] text-gray-300 after:rounded-full place-items-center">
                <div className="grid p-[8px] bg-white border-0 border-gray-100 rounded-full place-content-center">
                  {index + 1 < stepper.step ? (
                    <CheckIcon className="w-4 h-4  p-[2px] text-white bg-teal-700 rounded-full" />
                  ) : index + 1 === stepper.step ? (
                    <CheckIcon className="w-4 h-4 p-[2px] text-white bg-teal-700/30 rounded-full" />
                  ) : (
                    <CheckIcon className="w-4 h-4 p-[2px] text-transparent bg-teal-700/10 rounded-full" />
                  )}
                </div>
                <p
                  className={
                    index + 1 === stepper.step
                      ? "text-black/70 font-bold whitespace-nowrap"
                      : undefined
                  }
                >
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/** RENDER CONTENT CHILDREN */}
      <div className="">{handleSteps(stepper.step)}</div>
    </>
  );
};

export default StepForm;
