import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="border-b-4 bg-[#d71e28] flex items-center justify-center w-full p-5 py-2 border-b-[#fcc60a]">
      <Image
        src="https://i.imgur.com/gaShZcx.png"
        className="w-[150px] h-[25px]"
        width={150}
        height={150}
        alt="logo"
      />
    </header>
  );
}
