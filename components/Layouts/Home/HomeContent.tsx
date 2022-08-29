import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";

const HomeContent = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto relative text-sm text-neutral-500 h-fit">
      <div className=" absolute bottom-0 flex  flex-col gap-6 m-6  mb-20">
        <div>
          <h1 className="text-4xl font-light max-w-[14ch] text-neutral-200 mb-2">
            Bscpe Store Clothing Lifestyle
          </h1>
          <p className='max-w-screen-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur explicabo labore assumenda amet placeat facere
            aspernatur. Provident ut, quo fuga recusandae ratione voluptate
            amet, assumenda sit nostrum voluptates debitis similique.
          </p>
        </div>
        <button
          className="inline-flex w-fit items-center justify-center gap-4 px-6 py-3 text-white border rounded border-neutral-300/40 bg-white/5 backdrop-blur"
          onClick={() => router.replace("#product")}
        >
          Shop now{" "}
          <span>
            <ArrowNarrowRightIcon className="animate-pulse" />
          </span>{" "}
        </button>

        {/* <button
          onClick={() => setToggleStateHandler("modal_full")}
          className="grid px-6 mx-auto mt-10 text-xs text-gray-500 animate-bounce place-items-center w-fit"
        >
          <span>Scroll</span>
          <ArrowDownIcon className="w-4" />
        </button> */}
      </div>
    </div>
  );
};

export default HomeContent;
