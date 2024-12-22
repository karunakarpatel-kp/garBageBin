import Image from "next/image";
import Link from "next/link";
import React from "react";

import sampleImage from "public/iBOMMA-logo.png";

const LandingPage = () => {
  return (
    <div className="border-0 border-white z-[9999999999999999] absolute top-0 right-0 bottom-0 left-0 h-dvh bg-slate-800 flex justify-center align-middle">
      <div className="container border shadow-2xl border-slate-700 md:w-2/6 lg:w-2/6 m-auto rounded-md relative">
        <span className="inline-flex rounded-full h-4 w-4 bg-sky-500 absolute right-0 top-0 animate-ping"></span>
        <h1 className="text-center text-xs mt-4 text-slate-100">iBOMMA</h1>
        <Image src={sampleImage} alt="sample-image" className=" m-auto  " />
        <div className="text-center">
          <p>100% Telugu Entertainment</p>
          <Link
            href="/telugu-movies"
            className="px-11 py-3 border border-slate-500 bg-[#fffe08] text-black uppercase text-lg font-semibold mb-4 no-underline inline-block rounded-md"
          >
            Enter
          </Link>
          <p className="w-5/6 m-auto mb-8">
            Watch and Download iBOMMA Telugu movies New 2024 in an excellent quality @ smallest file size. Developed for
            smartphones, tablets, PCs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
