"use client";
import React, { useState, useEffect } from "react";

const ReadingProgressBar = () => {
  const [width, setWidth] = useState(0);

  const updateProgressBar = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setWidth(percent);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateProgressBar);
    return () => {
      window.removeEventListener("scroll", updateProgressBar);
    };
  }, []);

  return (
    <div
      className="h-[2px] fixed top-[61px] bg-slate-600 border-0 border-red-800 block z-[999999999]"
      style={{ width: `${width}%` }}
    ></div>
  );
};

export default ReadingProgressBar;

// import { useState, useEffect } from "react";

// const ReadingProgressBar = () => {
//   const [width, setWidth] = useState(0);
//   const scrollHeight = () => {
//     var el = document.documentElement,
//       ScrollTop = el.scrollTop || document.body.scrollTop,
//       ScrollHeight = el.scrollHeight || document.body.scrollHeight;
//     var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
//     setWidth(percent);
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", scrollHeight);
//     return () => window.removeEventListener("scroll", scrollHeight);
//   });
//   return (
//     <div className={`border border-green-600 bg-red-700 h-4 w-[${width}%] `}></div>
//     // <div className={`w-[${width}%] fixed top-10 left-0 bg-[#ffca3c] h-2 z-[9999999999] border border-white`}></div>
//   );
// };
// export default ReadingProgressBar;

// {
//   /* <Box
//     sx={{
//       width: `${width}%`,
//       height: 2,
//       backgroundColor: "#ffca3c",
//       position: "fixed",
//       top: "62px",
//       zIndex: 9999999,
//       left: 0,
//     }}
//   ></Box> */
// }
