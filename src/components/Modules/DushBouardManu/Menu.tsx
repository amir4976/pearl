"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface MenuProps {
    title: string;
    url: string;
}

function Menu({urls}:{urls:MenuProps[]}) {
  const pathname = usePathname();
  console.log(urls)

  return (
    <div className="w-full border-l border-gray-700 h-fit p-7 font-DD  max-md:border-l-0 ">
      <div className="border-b p-3 border-gray-700">حساب کاربری من</div>
      <div className="p-4">
        <ul className="flex flex-col gap-1   transition-all  ">
          {urls.map((url:MenuProps, index:number) => {
            if (pathname === url.url) {
              return (
                <Link
                  className="bg-blue-500 py-2 px-3  text-white rounded-md cursor-pointer"
                  href={url.url}
                  key={index}
                >
                  <li>{url.title}</li>
                </Link>
              );
            } else {
              return (
                <Link
                  className="hover:bg-gray-500/25 py-2 px-3  text-white rounded-md cursor-pointer"
                  href={url.url}
                  key={index}
                >
                  <li>{url.title}</li>
                </Link>
              );
            }
          })}
          <li className=" hover:bg-red-500/25 py-2 px-3  text-white rounded-md cursor-pointer">
            خروج
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
