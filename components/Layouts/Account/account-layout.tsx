import React from "react";
import NestedLayout from "./../nested-layout";
import Nav from "./../Nav/Nav";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section>
        account-layout
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        <p>Hello world</p>
        {children}
      </section>
    </>
  );
};

export default AccountLayout;
