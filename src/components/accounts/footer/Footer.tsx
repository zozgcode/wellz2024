import React from "react";
import { fMenuLink } from "./data";
import Link from "next/link";

export default function Footer() {
  
  return (
    <div className="fixed p-4 sm:px-8 py-4 bottom-0 w-full bg-gray-300 left-0 right-0">
      <div className="flex justify-between gap-3 w-full">
        {fMenuLink.map((link, i) => (
          <Link href={link.slug} key={i} className="flex flex-col w-full items-center justify-center">
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
