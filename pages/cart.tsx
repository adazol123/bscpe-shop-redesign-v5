import React from "react";
import { auth } from "../auth/firebase";
import AccountState from "../utils/context/Account/AccountState";
import { UserAuth } from "../utils/context/Account/Auth";

const cart = () => {
  const { user } = UserAuth();
  console.log(user);
  return <div>cart</div>;
};

export default cart;
