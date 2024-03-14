import React from "react";
import Link from "next/link";

const SideNav = ({
  active,
}: {
  active: [
    isSideNavActive: boolean,
    setIsSideNavActive: React.Dispatch<React.SetStateAction<boolean>>
  ];
}) => {
  const [isSideNavActive, setIsSideNavActive] = active;
  const linkClass = `active:bg-neutral-800 px-4 py-3 block text-center border-b border-border last:border-none`;
  const onclickHandler = () => {
    setIsSideNavActive(false);
  };

  return (
    <div
      className={`${
        isSideNavActive ? "end-0" : "-end-3/4"
      } transition-all duration-300 ease-in-out inset-0 left-auto absolute h-screen w-3/4 bg-black sm:hidden border-s border-border py-28 px-6`}
    >
      <div className="border border-border rounded-xl">
        <Link href="/" className={linkClass} onClick={onclickHandler}>
          Collections
        </Link>
        <Link href="/history" className={linkClass} onClick={onclickHandler}>
          History
        </Link>
        <Link href="/dashboard" className={linkClass} onClick={onclickHandler}>
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
