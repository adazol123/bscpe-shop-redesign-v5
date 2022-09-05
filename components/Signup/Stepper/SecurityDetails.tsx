import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ChangeEvent, MouseEvent, MouseEventHandler, useState } from "react";

import {
  ArrowLeftIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { UserAuth } from "../../../utils/context/Account/Auth";
import { db } from "../../../auth/firebase";
import config from "../../../utils/services/config.json";
import PasswordRequirementInfo from "../PasswordRequirementInfo";
import TextInput from "../../UI/Input/TextInput";
import Spinner from "../../Layouts/Loader/Spinner";
import AdvisorySecurity from "../AdvisorySecurity";
import ButtonStandard from './../../UI/Button/Standard/ButtonStandard';
import ButtonLink from "../../UI/Button/Link/ButtonLink";

interface Steps {
  nextStep?: any;
  prevStep?: any;
  handleChange: (type: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  values?: any;
}

interface Steppers {
  setStepper: any;
}

//Password regex format
let lowerCaseLetters = /[a-z]/g;
let upperCaseLetters = /[A-Z]/g;
let number = /\d/g;

function SecurityDetails({
  nextStep,
  prevStep,
  handleChange,
  values,
  setStepper,
}: Steps & Steppers) {
  let router = useRouter();

  let [error, setError] = useState({
    password: null,
    confirm_password: null,
  });
  let [isLoading, setIsLoading] = useState(false);
  const { signup } = UserAuth();

  //Password Validator
  let passLength = values?.password.length < 9;
  let passNotLower = !values?.password.match(lowerCaseLetters);
  let passNotUpper = !values?.password.match(upperCaseLetters);
  let passNotNumber = !values?.password.match(number);
  let passNotMatch = values?.password !== values?.confirm_password;
  let isEmpty = !values?.password && !values?.confirm_password

  const isInvalid = isEmpty || passLength || passNotLower || passNotUpper || passNotMatch

  let Continue: MouseEventHandler<Element> = (event) => {
    event.preventDefault()

    if (isEmpty)
      return setError(
        (prev: any) => (prev = { ...prev, password: "Password required" })
      );
    if (passLength)
      return setError(
        (prev: any) =>
        (prev = {
          ...prev,
          password: "Must contain at least 8 or more characters",
        })
      );
    if (passNotLower)
      return setError(
        (prev: any) =>
        (prev = {
          ...prev,
          password: "Must contain uppercase/capital characters",
        })
      );

    if (passNotUpper)
      return setError(
        (prev: any) =>
        (prev = {
          ...prev,
          password: "Must contain uppercase/capital characters",
        })
      );

    if (passNotNumber)
      return setError(
        (prev: any) =>
        (prev = {
          ...prev,
          password: "Must contain at least 1 numeric value",
        })
      );

    if (passNotMatch)
      return setError(
        (prev: any) =>
          (prev = { ...prev, confirm_password: "Password not match" })
      );
    setIsLoading(true);
    setError((prev) => (prev = { password: null, confirm_password: null }));

    setTimeout(() => {
      return register()
        .then((res) => {
          console.log("registration success > ", res);
          router.replace("/?success=true");
          setIsLoading(true);
          console.clear()
        })
        .catch((error) => console.log("registration error >", error));
    }, 5000);
  };

  let Previous: MouseEventHandler<Element> = (event) => {
    event.preventDefault();
    prevStep();
  };

  const register = async () => {
    try {
      const user = await signup!(values?.email, values?.password);
      updateProfile(user?.user, {
        displayName: values?.username,
      });

      /**
       * change from addDoc to setDoc to manualy set root ID or UID of the document
       */
      await setDoc(doc(db, "users", user?.user?.uid), {
        uid: user?.user.uid,
        authProvider: "local",
        email: values?.email,
        fullname: values?.fullname.trim(),
        isSeller: false,
        cart: [],
      });

      /**
       * 07.08.2022 - Added Virtual card to firestore database
       *
       * Virtual Card initial setup right after user created an account
       */

      await setDoc(
        doc(db, `${config.USER}${user?.user?.uid}${config.PAYMENT}`),
        {
          uid: user?.user.uid,
          cardNumber: "0000000000000000",
          cardHolder: values?.fullname.trim(),
          cardType: ["VISA", "Master Card", "AMEX"],
          defaultCard: "VISA",
          color: ["fill-neutral-800", "fill-amber-800", "fill-slate-700"],
          bank: "Development Bank of the Philippines",
        }
      );
    } catch (error: any) {
      console.log(error.code);
    }

    setStepper(
      (prev: any) =>
      (prev = {
        step: 1,
        email: "",
        username: "",
        fullname: "",
        password: "",
        confirm_password: "",
      })
    );
  };

  return (
    <>
      <form className="flex flex-col gap-8">
        <div className='flex flex-col gap-3'>
          <PasswordRequirementInfo
            passLength={values?.password.length < 9}
            passLowerCase={!values?.password.match(lowerCaseLetters)}
            passUpperCase={!values?.password.match(upperCaseLetters)}
            passNumber={!values?.password.match(number)}
            passNotMatch={values?.password !== values?.confirm_password}
            isEmpty={!values?.password && !values?.confirm_password}
          />

          <TextInput
            type={"password"}
            placeholder={"Password"}
            value={values.password}
            autoFocus
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            onChange={(e: any) => {
              setError((prev) => (prev = { ...prev, password: null }));
              handleChange("password")(e);
            }}
          />
          <TextInput
            type={"password"}
            placeholder={"Confirm Password"}
            value={values.confirm_password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"

            onChange={(e: any) => {
              setError((prev) => (prev = { ...prev, confirm_password: null }));
              handleChange("confirm_password")(e);
            }}
          />

          <div className='flex flex-col gap-6'>
            <ButtonStandard
              direction="right"
              disabled={isInvalid}
              className={"text-xs py-4 w-full"}
              onClick={Continue}
            >
              {isLoading ? (
                <Spinner />
              ) : (
                <>
                  <span>Complete Setup</span>
                </>
              )}
            </ButtonStandard>
            <ButtonLink type='button' icon={<ArrowLeftIcon className='w-4 h-4' />} onClick={Previous} underline_style='expanded' >Back to Information</ButtonLink>
          </div>
        </div>
      </form>
      {/* <AdvisorySecurity /> */}
    </>
  );
}

export default SecurityDetails;
