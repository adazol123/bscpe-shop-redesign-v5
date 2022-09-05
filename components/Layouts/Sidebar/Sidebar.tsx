import React from "react";
import ModalSlider from "./../../UI/Modals/Slider/ModalSlider";
import ButtonStandard from "../../UI/Button/Standard/ButtonStandard";
import NavLinks from "../Nav/NavLinks";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../../utils/app/hook";
import { toggleState } from "../../../features/toggle/toggle-state-slice";
import { logout } from "../../../features/user/user-auth-slice";
import { auth } from "../../../auth/firebase";
import ButtonLink from "../../UI/Button/Link/ButtonLink";
import { ChevronRightIcon, UserIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  // const { toggleState, toggleStateHandler } = ToggleState();
  const side_bar_state = useAppSelector(state => state.toggles.side_bar)

  return (
    <ModalSlider
      state={side_bar_state}
      toggleStateHandler={() => dispatch(toggleState('side_bar'))}
      enableFooter
      footer={<Footer />}
    >
      <NavLinks />
    </ModalSlider>
  );
};

const Footer = () => {
  // const {logoutUser } = UserAuth();

  const user = useAppSelector(state => state.auth.user)
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col px-4 gap-4">
        {user ? (
          <>
            <ButtonStandard className="py-3 justify-start"
              onClick={() => {
                router.replace('/account')
                dispatch(toggleState('side_bar'))
              }}
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2">

                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                    {user?.photoURL
                      ? <Image src={user.photoURL} alt='user_profile_image' layout='fill' /> : <UserIcon />}
                    <UserIcon className='w-4 h-4' />
                  </div>
                  <div className="flex flex-col justify-start text-left">
                    <h3>{user?.displayName}</h3>
                    <span className="text-[0.7em] text-white/50 leading-3">
                      {user?.email}
                    </span>
                  </div>
                </div>
                <ChevronRightIcon className='w-4 h-4' />
              </div>
            </ButtonStandard>
            <ButtonLink
              onClick={async () => {
                try {
                  await auth.signOut()
                  dispatch(logout())
                  dispatch(toggleState('side_bar'))

                } catch (error: any) {
                  console.log(error.message)
                }
              }}
            >
              Logout
            </ButtonLink>
          </>
        ) : (
          <ButtonStandard
            className="py-3 justify-start"
            onClick={() => {
              router.replace("/login");
              dispatch(toggleState('side_bar'));
            }}
          >
            Login
          </ButtonStandard>
        )}
      </div>
    </>
  );
};

export default Sidebar;
