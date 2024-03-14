
import Image from "next/image";
import React from "react";

const NavIcon = ({
  imgSrc,
  className = "",
  toggle = [null, null],
}: {
  imgSrc: string;
  className?: string;
  toggle?: [boolean | null, React.Dispatch<React.SetStateAction<boolean>> | null];
}) => {
  const [val, setVal] = toggle;

  return (
    <div
      className={`active:bg-neutral-800 cursor-pointer bg-black flex justify-center items-center border border-border mx-1.5 h-12 w-12 rounded-full ${className}`}
      onClick={() => {
        setVal?.((val: boolean) => !val);
      }}
    >
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
