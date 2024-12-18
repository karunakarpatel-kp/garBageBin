"use client";
import React, { useEffect, useState } from "react";
import Logo from "public/Logo.svg";
import { FaBlog, FaCar, FaCarSide, FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import { IoIosLogIn, IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/aBOMMA-logo.png";

interface NavigationProps {
  darkMode: boolean | null;
}

const Navigation = (props: NavigationProps) => {
  const [homePage, setHomePage] = useState<boolean>(false);

  const navigate = useRouter();
  const pathName = usePathname();

  const onLogoClickHandler = () => {
    navigate.push("/");
  };

  useEffect(() => {
    if (pathName === "/") {
      setHomePage(true);
    } else {
      setHomePage(false);
    }
  }, [pathName, homePage]);

  return (
    <>
      <div
        className={
          "h-16  bg-brandColor border-b border-b-slate-500 dark:bg-slate-900 dark:border-b dark:border-b-slate-700  md:ml-0 pl-2 grid grid-cols-12 fixed w-full z-50"
        }
      >
        {/* Desktop */}
        <div className="hidden md:invisible lg:flex col-span-1 border-0 border-white self-stretch justify-center items-center ">
          left
        </div>
        <div
          className="col-span-5 md:col-span-4  border-0 border-green-800 mt-1 ml-2 md:ml-0 lg:ml-0 cursor-pointer"
          onClick={onLogoClickHandler}
        >
          <Image src={logo} alt="aBOMMA logo" className="border-0 border-white mt-0" />
        </div>
        <div className="col-span-7 md:col-span-6 border-0 border-purple-400 m-0 p-0 mr-3  ">
          <ul className="list-none flex space-x-2 md:space-x-6 text-white justify-end mt-2">
            <li>
              <Link href="/" className="text-white">
                <FaHome size={27} />
                {/* Login */}
              </Link>
            </li>

            <li>
              <Link href="/" className="text-white">
                <FaBlog size={27} />
                {/* Login */}
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="md:hidden border-0 col-span-3 flex justify-center items-center  cursor-pointer">
          <GiHamburgerMenu size={27} fill="white" onClick={onOpenClickHandler} />
        </div> */}

        <div className="hidden md:invisible lg:flex col-span-1 border-2 border-white self-stretch justify-center items-center ">
          Right
        </div>
      </div>
      {homePage && (
        <div className="border-0 border-white text-white pt-10 bg-brandColor dark:bg-slate-900 dark:border-b dark:border-b-slate-800">
          <div className="text-white border-0 text-center py-9 mt-10">
            <h1 className="text-white font-bold text-3xl md:text-4xl">Welcome to Abomma</h1>
            <p className="text-white font-semibold text-xl capitalize">
              A place where you learn about the latest news, updates, upcoming releases at Ibomma.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;

{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="170" height="48" viewBox="0 0 345 88">
            <path
              id="Path_7"
              data-name="Path 7"
              d="M64,5H10A10,10,0,0,0,0,15V62A10,10,0,0,0,10,72H64A10,10,0,0,0,74,62V15A10,10,0,0,0,64,5Z"
              transform="translate(0 11)"
              // fill="#ffca3c"
              fill="white"
            />
            <text
              id="Text_2_Image"
              data-name="Karunakar Patel"
              transform="translate(89)"
              // fill="#ffca3c"
              fill="white"
              fontSize="35"
              fontFamily="SegoeUI-Semibold, Segoe UI"
              fontWeight="600"
            >
              <tspan x="0" y="40">
                aBOMMA
              </tspan>
            </text>
            <text
              id="Converter"
              transform="translate(89 79)"
              // fill="#ffca3c"
              fill="white"
              fontSize="35"
              fontFamily="SegoeUI-Semibold, Segoe UI"
              fontWeight="600"
            >
              <tspan x="0" y="0">
                Movie Reviews
              </tspan>
            </text>
            <path
              id="Path_8"
              data-name="Path 8"
              d="M57.441,14.809A2.014,2.014,0,0,1,56.872,17l-3.849,3.5a16.943,16.943,0,0,1,0,4.516l3.849,3.5a2.014,2.014,0,0,1,.569,2.187,22.034,22.034,0,0,1-1.4,3.049l-.418.72a22.619,22.619,0,0,1-1.965,2.773,2.013,2.013,0,0,1-2.178.6l-4.951-1.573a17.1,17.1,0,0,1-3.911,2.258L41.5,43.61a2.009,2.009,0,0,1-1.618,1.582,23.093,23.093,0,0,1-7.556,0,2.009,2.009,0,0,1-1.618-1.582L29.6,38.535a17.1,17.1,0,0,1-3.911-2.258l-4.942,1.582a2.029,2.029,0,0,1-2.178-.6A22.62,22.62,0,0,1,16.6,34.481l-.418-.72a22.034,22.034,0,0,1-1.4-3.049,2.014,2.014,0,0,1,.569-2.187l3.849-3.5a17.44,17.44,0,0,1-.151-2.267A17.2,17.2,0,0,1,19.2,20.5L15.35,17a2.014,2.014,0,0,1-.569-2.187,22.034,22.034,0,0,1,1.4-3.049l.418-.72a22.619,22.619,0,0,1,1.965-2.773,2.013,2.013,0,0,1,2.178-.6L25.7,9.236a17.105,17.105,0,0,1,3.911-2.258L30.72,1.9A2.009,2.009,0,0,1,32.337.32,22.037,22.037,0,0,1,36.115,0a22.969,22.969,0,0,1,3.778.311,2.009,2.009,0,0,1,1.618,1.582l1.111,5.076a17.1,17.1,0,0,1,3.911,2.258l4.951-1.573a2.029,2.029,0,0,1,2.178.6,22.62,22.62,0,0,1,1.965,2.773l.418.72a22.033,22.033,0,0,1,1.4,3.049ZM36.115,29.868A7.111,7.111,0,1,0,29,22.756a7.111,7.111,0,0,0,7.111,7.111Z"
              transform="translate(1.338 27)"
              fill="black"
            />
          </svg> */
}
