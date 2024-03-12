import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-20 py-8 h-fit">
      <div></div>
      <div className="flex justify-center items-center">
        <div className="border border-neutral-700 ms-3 h-11 w-11 rounded-full">
          {/* <Image src="" alt="" className="h-full w-full" /> */}
        </div>
        <div className="border border-neutral-700 mx-3 h-11 w-11 rounded-full">
          {/* <Image src="" alt="" className="h-full w-full" /> */}
        </div>
        <div className="border rounded-xl h-fit w-fit border-neutral-700">
          <Link
            href="/"
            className="inline-block px-6 py-2 border-e border-neutral-700"
          >
            Collections
          </Link>
          <Link
            href="/history"
            className="inline-block px-6 py-2 border-e border-neutral-700"
          >
            History
          </Link>
          <Link href="/dashboard" className="inline-block px-6 py-2">
            Dashboard
          </Link>
        </div>
        <div className="border border-neutral-700 ms-3 h-11 w-11 rounded-2xl">
          {/* <Image src="" alt="" className="h-full w-full" /> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
