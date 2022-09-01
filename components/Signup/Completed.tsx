import { XIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { UserAuth } from "../../utils/context/Account/Auth";
import ButtonLink from "../UI/Button/Link/ButtonLink";
import ButtonStandard from "../UI/Button/Standard/ButtonStandard";
import Center from "../UI/Wrapper/Center";

const Completed = () => {
  let router = useRouter();
  let { user } = UserAuth()
  return (
    <div className="fixed top-0 left-0 z-[105] bg-gradient-to-r from-[#FAFFFE] to-[#DFF7F4] w-full h-full">
      <Head>
        <title>Adazolhub | Shop - Completed</title>
      </Head>
      <button className="p-2 w-fit right-2 top-2 absolute" onClick={() => router.replace("/")}>
        <XIcon className="w-5 h-5" />
      </button>
      <Center>

        <div className="flex flex-col items-start justify-around gap-16 max-w-[264px] mx-auto max-h-[600px] py-16">
          <div className='relative w-[168px] mx-auto px-5 h-16 pointer-events-none'>
            <Image src={'/svg/adazolhub_shop_logo_desktop_colored.svg'} alt='adazolhub_shop_logo' layout='fill' />
          </div>
          <div className="w-full h-[40vh] flex flex-col justify-between items-start">
            <div className="flex flex-col items-center mx-auto">

              <h1 className="mt-4 text-3xl font-medium leading-10 text-theme-gray-700">
                You&apos;re all set up!
              </h1>
              {/* <p className="text-sm font-light text-theme-gray-500 text-center max-w-[25ch]">
                Account has been successfully registerred!
              </p> */}
              <p className="text-sm font-light text-theme-gray-500 text-center max-w-[25ch]">
                <strong>{user?.email}</strong> <span>
                  has been successfully registerred!
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full gap-6">
            <ButtonStandard
              onClick={() => router.replace("/account")}
            >
              Configure My Account
            </ButtonStandard>
            <ButtonLink

              onClick={() => router.replace("/")}
            >
              Explore Shop
            </ButtonLink>
          </div>
        </div>
      </Center>
      <a
        href='https://www.adazolhub.com'
        target='_blank'
        rel="noreferrer"
        className='text-[0.65rem] text-theme-gray-500  text-center whitespace-nowrap relative bottom-8 left-1/2 -translate-x-1/2 block'>Copyright © 2022 Adazolhub.com | All rights reserved.</a>
    </div>
  );
};

export default Completed;
