import Image from "next/image";
import Link from "next/link";
import React from "react";
import subSrc from "/public/icons/sun.svg";
import notificationSrc from "/public/icons/bell.svg";
import profileSrc from "/public/icons/user.svg";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-20 py-8 h-fit">
      <div></div>
      <div className="flex justify-center items-center">
        <div className="cursor-pointer flex justify-center items-center border border-neutral-700 ms-3 h-12 w-12 rounded-full">
          <Image src={subSrc} alt="darkMode" width={10} height={10} className="text-white h-5 w-5" />
        </div>
        <div className="cursor-pointer flex justify-center items-center border border-neutral-700 mx-3 h-12 w-12 rounded-full">
          <Image src={notificationSrc} alt="" width={10} height={10} className="h-5 w-5" />
        </div>
        <div className="border rounded-xl h-fit w-fit border-neutral-700">
          <Link
            href="/"
            className="inline-block px-9 py-2.5 border-e border-neutral-700"
          >
            Collections
          </Link>
          <Link
            href="/history"
            className="inline-block px-9 py-2.5 border-e border-neutral-700"
          >
            History
          </Link>
          <Link href="/dashboard" className="inline-block px-9 py-2.5">
            Dashboard
          </Link>
        </div>
        <div className="cursor-pointer flex justify-center items-center border border-neutral-700 ms-3 h-12 w-12 rounded-full">
          <Image src={profileSrc} alt="profile" width={10} height={10} className="text-white h-5 w-5" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
