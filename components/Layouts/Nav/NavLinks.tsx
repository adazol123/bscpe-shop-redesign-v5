import React from "react";
import Link from "next/link";

const NavLinks = () => {
  return (
    <div className="flex gap-3">
      <Link href={"/"} replace>
        Home
      </Link>
      <Link href={"/cart"}>Cart</Link>
    </div>
  );
};

export default NavLinks;
