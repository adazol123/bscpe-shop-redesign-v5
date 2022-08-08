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

const Sidebar = () => {
  const { toggleState, toggleStateHandler } = ToggleState();
  return (
    <ModalSlider
      state={toggleState!["side_bar"]}
      toggleStateHandler={() => toggleStateHandler!("side_bar")}
      enableFooter
      footer={<Footer />}
    >
      <NavLinks />
    </ModalSlider>
  );
};

const Footer = () => {
  const { user, logout } = UserAuth();
  const { toggleStateHandler } = ToggleState();
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col px-4 gap-2">
        {user ? (
          <>
            <ButtonStandard icon={<UserIcon />} className="py-3 justify-start"
              onClick={() => {
                router.replace('/account')
                toggleStateHandler!("side_bar")
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
              type={"link"}
              className="py-3  justify-start"
              onClick={() => {
                logout!().then(() => toggleStateHandler!("side_bar"));
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
              toggleStateHandler!("side_bar");
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
