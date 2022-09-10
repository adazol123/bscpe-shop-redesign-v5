import { ArrowLeftIcon, ArrowNarrowRightIcon } from "@heroicons/react/outline";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { auth } from "../../../auth/firebase";
import ButtonLink from "../../UI/Button/Link/ButtonLink";
import ButtonStandard from "../../UI/Button/Standard/ButtonStandard";
import InformationalError from "../../UI/Error/InformationalError";
import TextInput from "../../UI/Input/TextInput";
import { StepperProps, StepperValue } from "./StepForm";

function EmailDetails({ nextStep, handleChange, values }: Omit<StepperProps<Omit<StepperValue, 'step'>>, 'prevStep'>) {
  let regex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let router = useRouter();

  let [error, setError] = useState<string | null | HTMLElement | JSX.Element>(
    null
  );
  let Continue = (e: React.MouseEvent) => {
    e.preventDefault();

    if (values.email.length < 1)
      return setError(<>A valid email is required to continue.</>);
    if (!regex.test(values.email))
      return setError("Invalid email format. Please try again");

    /**
     * Firebase auth to check if email is already registered
     */
    fetchSignInMethodsForEmail(auth, values.email)
      .then((ifEmailExist) => {
        if (ifEmailExist.length > 0)
          return setError(
            <>
              <span>
                Email already registered on our server. {" "}
                <strong
                  className="underline text-gray-40 w-fit cursor-pointer "
                  onClick={() => router.replace("/login")}
                >
                  Try login
                </strong>
              </span>
            </>
          );
        setError(null);
        return nextStep();
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email")
          return setError("Invalid email format. Please try again");
      });
  };



  return (
    <form className="flex flex-col gap-8"
    >
      <div className='flex flex-col gap-3'>
        {error && <InformationalError error={error} />}

        <TextInput
          type='email'
          placeholder='Email'
          value={values.email}
          required

          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setError(null);
            handleChange("email")(e);
          }}

        />
        <div className='flex flex-col gap-6 my-4'>
          <ButtonStandard
            direction="right"
            disabled={!values.email}
            className={"text-xs py-4 w-full"}
            onClick={Continue}
          >
            Continue
          </ButtonStandard>
          <ButtonLink type='button' icon={<ArrowLeftIcon className='w-4 h-4' />} onClick={() => router.back()} underline_style='expanded' >Other login options</ButtonLink>
        </div>

      </div>

    </form>

  );
}

export default EmailDetails;
