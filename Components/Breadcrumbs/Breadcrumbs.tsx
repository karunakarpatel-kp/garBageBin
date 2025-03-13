"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Breadcrumbs = () => {
  const pathName = usePathname();
  const pathNameArray = pathName.split("/");
  const pathNameLength = pathNameArray.length - 1;
  const lastItemInPathName = pathNameArray[pathNameLength];
  return (
    <div className="-mt-8 -mb-8 -ml-2">
      <ul className="no-underline flex m-0 p-0 ">
        <li className="p-0 border-0 border-red-600 ml-2 md:-ml-8  list-none ">
          <Link
            href="/"
            className="m-0 underline underline-offset-4 hover:underline hover:underline-offset-8 italic text-slate-300 text-base "
          >
            Home
          </Link>
        </li>
        <li className="p-0 border-0 border-red-600 list-none before:content-['/'] before:pl-2">
          <Link
            href="/telugu-movies"
            className="m-0 p-0 underline underline-offset-4 hover:underline hover:underline-offset-8 italic text-slate-300 text-base pl-2 mr-2"
          >
            Telugu Movies
          </Link>
        </li>
        <li className=" border-0 border-red-600 list-none before:content-['/'] before:pr-2 italic text-slate-300 p-0 m-0 md:text-lg text-base pt-5 md:pt-2 font-semibold">
          {lastItemInPathName}
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
