import { createContext, useContext, useState } from "react";

let states = {
  modal: false,
  notification: false,
  cart: false,
  modal_ios: false,
  modal_full: false,
  modal_standard: false,
  modal_mobile: false,
  header_notify: true,
  side_bar: false,
  hamburger_mobile: false,
  settings: false,
  pay_now: false,
};

export interface StaticState {
  toggleState?: { [state: string]: boolean };
  /**
   ** Function for toggling the state file location @ `/utils/context/toggles/togglestate`
   ** @param `type` This is state that toggles some components
   * example `type's`:
   *   - modal
   *   - notification
   *   - cart
   *   - header_notify
   *   - modal_ios
   *   - modal_full
   *   - modal_standard
   *   - side_bar
   *   - hamburger_mobile
   */
  toggleStateHandler?: (
    type:
      | "modal"
      | "notification"
      | "cart"
      | "header_notify"
      | "modal_ios"
      | "modal_full"
      | "modal_standard"
      | "modal_mobile"
      | "side_bar"
      | "hamburger_mobile"
      | "pay_now"
  ) => void;
  selectedProduct?: any;
  setSelectedProduct?: any;
}

export interface States {
  category?: any;
}

const ToggleContext = createContext<StaticState>({});

export const ToggleStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toggleState, setToggleState] = useState<{ [state: string]: boolean }>({
    modal: false,
    notification: false,
    cart: false,
    modal_ios: false,
    modal_full: false,
    modal_standard: false,
    modal_mobile: false,
    header_notify: true,
    side_bar: false,
    hamburger_mobile: false,
    settings: false,
    pay_now: false,
  });

  const toggleStateHandler = (
    type:
      | "modal"
      | "notification"
      | "cart"
      | "header_notify"
      | "modal_ios"
      | "modal_full"
      | "modal_standard"
      | "modal_mobile"
      | "side_bar"
      | "hamburger_mobile"
      | "pay_now"
  ) => setToggleState((prev) => (prev = { ...prev, [type]: !prev[type] }));
  let values = {
    toggleState,
    toggleStateHandler,
  };

  return (
    <ToggleContext.Provider value={values}>{children}</ToggleContext.Provider>
  );
};

export const ToggleState = () => useContext(ToggleContext);
