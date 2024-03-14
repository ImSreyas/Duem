import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import collectionSrc from "/public/icons/stack.svg";
import historySrc from "/public/icons/history.svg";
import dashboardSrc from "/public/icons/dashboard.svg";

const MobileNav = ({state}: {state: boolean}) => {
  return (
    <div className={`${!state ? "hidden" : ""} fixed inset-0 top-auto sm:hidden flex justify-around bg-black border-t border-neutral-700 pt-5 pb-11 px-8 rounded-2xl`}>
        <Link href="/" className="px-8 py-3 border border-neutral-700 rounded-full active:bg-neutral-800">
            <Image width={10} height={10} alt="" src={collectionSrc} className="w-5 h-5" />
        </Link>
        <Link href="/history" className="px-8 py-3 border border-neutral-700 rounded-full active:bg-neutral-800">
            <Image width={10} height={10} alt="" src={historySrc} className="w-5 h-5" />
        </Link>
        <Link href="/dashboard" className="px-8 py-3 border border-neutral-700 rounded-full active:bg-neutral-800">
            <Image width={10} height={10} alt="" src={dashboardSrc} className="w-5 h-5" />
        </Link>
    </div>
  )
}

export default MobileNav