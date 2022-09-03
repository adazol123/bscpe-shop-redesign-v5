import React from "react";
import { ToggleState } from "../../../utils/context/Toggles/ToggleState";
import ModalSlider from "./../../UI/Modals/Slider/ModalSlider";
import { StaticState } from "./../../../utils/context/Toggles/ToggleState";
import ButtonStandard from "../../UI/Button/Standard/ButtonStandard";
import { UserIcon } from "@heroicons/react/solid";
import { LogoutIcon, LoginIcon } from "@heroicons/react/solid";
import NavLinks from "../Nav/NavLinks";
import { UserAuth } from "../../../utils/context/Account/Auth";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../../utils/app/hook";
import { toggleState } from "../../../features/toggle/toggle-state-slice";
import { logout } from "../../../features/user/user-auth-slice";
import { auth } from "../../../auth/firebase";

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
      <div className="flex flex-col px-4 gap-2">
        {user ? (
          <>
            <ButtonStandard icon={<UserIcon />} className="py-3 justify-start"
              onClick={() => {
                router.replace('/account')
                dispatch(toggleState('side_bar'))
              }}
            >
              <div className="flex flex-col justify-start text-left">
                <h3>{user?.displayName}</h3>
                <span className="text-[0.8em] text-white/30 leading-3">
                  {user?.email}
                </span>
              </div>
            </ButtonStandard>
            <ButtonStandard
              icon={<LogoutIcon />}
              styled={"outline"}
              className="py-3  justify-start"
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
            </ButtonStandard>
          </>
        ) : (
          <ButtonStandard
            icon={<LoginIcon />}
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
