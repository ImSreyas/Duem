import Link from "next/link";
import React from "react";
import subSrc from "/public/icons/sun.svg";
import notificationSrc from "/public/icons/bell.svg";
import profileSrc from "/public/icons/user.svg";
import menuBurgerSrc from "/public/icons/menu-burger.svg";
import NavIcon from "./NavIcon";

const Nav = () => {

  return (
    <nav className="flex justify-between items-center px-6 sm:px-10 md:px-20 py-8 h-fit">
      <div></div>
      <div className="flex justify-center items-center">
        <NavIcon imgSrc={subSrc} />
        <NavIcon imgSrc={notificationSrc} />
        <div className="mx-1.5 hidden sm:block border rounded-xl h-fit w-fit border-neutral-700">
          <Link
            href="/"
            className="inline-block px-4 md:px-6 lg:px-8 py-2.5 border-e border-neutral-700"
          >
            Collections
          </Link>
          <Link
            href="/history"
            className="inline-block px-4 md:px-6 lg:px-8 py-2.5 border-e border-neutral-700"
          >
            History
          </Link>
          <Link href="/dashboard" className="inline-block px-4 md:px-6 lg:px-8 py-2.5">
            Dashboard
          </Link>
        </div>
        <NavIcon imgSrc={profileSrc} />
        <NavIcon imgSrc={menuBurgerSrc} className="block sm:hidden" />
      </div>
      
    </nav>
  );
};

export default Nav;
