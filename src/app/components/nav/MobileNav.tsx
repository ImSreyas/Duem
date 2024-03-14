import Image from "next/image";
import React from "react";
import Link from "next/link";
import collectionSrc from "/public/icons/stack.svg";
import historySrc from "/public/icons/history.svg";
import dashboardSrc from "/public/icons/dashboard.svg";

const MobileNav = ({ state }: { state: boolean }) => {
  return (
    <div
      className={`${
        !state ? "hidden" : ""
      } fixed inset-0 top-auto sm:hidden flex justify-around bg-black border-t border-border pt-5 pb-11 px-9 rounded-2xl`}
    >
      <Link
        href="/"
        className="px-8 py-2.5 border border-border rounded-full active:bg-neutral-800"
      >
        <Image
          width={10}
          height={10}
          alt=""
          src={collectionSrc}
          className="w-5 h-5"
        />
      </Link>
      <Link
        href="/history"
        className="px-8 py-2.5 border border-border rounded-full active:bg-neutral-800"
      >
        <Image
          width={10}
          height={10}
          alt=""
          src={historySrc}
          className="w-5 h-5"
        />
      </Link>
      <Link
        href="/dashboard"
        className="px-8 py-2.5 border border-border rounded-full active:bg-neutral-800"
      >
        <Image
          width={10}
          height={10}
          alt=""
          src={dashboardSrc}
          className="w-5 h-5"
        />
      </Link>
    </div>
  );
};

export default MobileNav;
