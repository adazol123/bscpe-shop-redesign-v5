import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ChangeEvent, useState } from "react";

import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { UserAuth } from "../../../utils/context/Account/Auth";
import { db } from "../../../auth/firebase";
import config from "../../../utils/services/config.json";
import PasswordRequirementInfo from "../PasswordRequirementInfo";
import Input from "../../UI/Input/Input";
import Spinner from "../../Layouts/Loader/Spinner";
import AdvisorySecurity from "../AdvisorySecurity";

interface Steps {
  nextStep?: any;
  prevStep?: any;
  handleChange: (type: string) => (e: ChangeEvent<HTMLInputElement>) => void;
  values?: any;
}

interface Steppers {
  setStepper: any;
}
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

  //Password regex format
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let number = /\d/g;

  //Password Validator
  let passLength = values?.password.length < 9;
  let passNotLower = !values?.password.match(lowerCaseLetters);
  let passNotUpper = !values?.password.match(upperCaseLetters);
  let passNotNumber = !values?.password.match(number);
  let passNotMatch = values?.password !== values?.confirm_password;

  let Continue = (e: any) => {
    e.preventDefault();

    if (values?.password === "")
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
      router.replace("/success");
      return register()
        .then((res) => {
          console.log("registration success > ", res);
          setIsLoading(true);
        })
        .catch((error) => console.log("registration error >", error));
    }, 5000);
  };

  let Previous = (e: any) => {
    e.preventDefault();
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
      <form>
        <PasswordRequirementInfo
          passLength={values?.password.length < 9}
          passLowerCase={!values?.password.match(lowerCaseLetters)}
          passUpperCase={!values?.password.match(upperCaseLetters)}
          passNumber={!values?.password.match(number)}
          passNotMatch={values?.password !== values?.confirm_password}
        />

        <Input
          type={"password"}
          placeholder={"Password"}
          defaultValue={values.password}
          autoFocus
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          className={
            error?.password
              ? "border-rose-200 ring-rose-200"
              : passLength || passNotLower || passNotUpper || passNotNumber
              ? "border-neutral-400"
              : "border-emerald-600/30"
          }
          placeholderClassName={
            error?.password
              ? "text-rose-300"
              : passLength || passNotLower || passNotUpper || passNotNumber
              ? "text-neutral-400"
              : "text-emerald-600/30"
          }
          onChange={(e: any) => {
            setError((prev) => (prev = { ...prev, password: null }));
            handleChange("password")(e);
          }}
        />
        <div className="h-4 -mt-[0.6rem] ml-1">
          <p className="text-rose-400 text-[0.68em] ">
            {error?.password && error?.password}
          </p>
        </div>

        <Input
          type={"password"}
          placeholder={"Confirm Password"}
          defaultValue={values.confirm_password}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          className={
            error?.confirm_password
              ? "border-rose-200 ring-rose-200"
              : passLength ||
                passNotLower ||
                passNotUpper ||
                passNotNumber ||
                passNotMatch
              ? "border-neutral-400"
              : "border-emerald-600/30"
          }
          placeholderClassName={
            error?.confirm_password
              ? "text-rose-300"
              : passLength ||
                passNotLower ||
                passNotUpper ||
                passNotNumber ||
                passNotMatch
              ? "text-neutral-400"
              : "text-emerald-600/30"
          }
          onChange={(e: any) => {
            setError((prev) => (prev = { ...prev, confirm_password: null }));
            handleChange!("confirm_password")(e);
          }}
        />
        <div className="h-4 -mt-[0.6rem] ml-1">
          <p className="text-rose-400 text-[0.68em] ">
            {error?.confirm_password && error?.confirm_password}
          </p>
        </div>

        <div className="flex flex-row-reverse items-center justify-between my-2 text-xs">
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 my-2 text-gray-200 rounded-md bg-black/90 focus:outline focus:outline-1 focus:outline-offset-2 hover:bg-gray-500  min-w-[155px]"
            onClick={Continue}
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                {" "}
                <span>Complete Setup</span>{" "}
                <ArrowNarrowRightIcon className="w-5 h-5" />
              </>
            )}
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 my-2 border border-transparent rounded-md text-black/70 bg-gray-200/40 hover:bg-gray-100 hover:border-gray-400"
            onClick={Previous}
          >
            <ArrowNarrowLeftIcon className="w-5" /> Back
          </button>
        </div>
      </form>
      <AdvisorySecurity />
    </>
  );
}

export default SecurityDetails;
