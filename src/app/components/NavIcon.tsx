import Image from "next/image";
import React from "react";

const NavIcon = ({
  imgSrc,
  className="",
}: {
  imgSrc: string;
  className?: string;
}) => {
  return (
    <div className={`cursor-pointer flex justify-center items-center border border-neutral-700 mx-1.5 h-12 w-12 rounded-full ${className}`}>
      <Image
        src={imgSrc}
        alt="darkMode"
        width={10}
        height={10}
        className="text-white h-5 w-5"
      />
    </div>
  );
};

export default NavIcon;
