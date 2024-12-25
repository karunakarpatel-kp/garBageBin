"use client";

import Navigation from "@Navigation/Navigation";
import ProgressBar from "@ramonak/react-progress-bar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const WatchPageVideoFrame = () => {
  const router = useRouter();
  const [completed, setCompleted] = useState(0); // Initial progress state

  useEffect(() => {
    // 2.5minutes×60seconds per minute×1000milliseconds per second
    // 1 min * 60 sec per minute * 1000 millseconds = 60000
    // const totalDuration = 180000; // 10 seconds in milliseconds
    // const totalDuration = 150000; // 2.5 minutes
    const totalDuration = 64000;
    const updateInterval = 1000; // 1 second interval
    const step = 100 / (totalDuration / updateInterval); // Progress increment per interval

    const interval = setInterval(() => {
      setCompleted((prev) => {
        if (prev + step >= 100) {
          clearInterval(interval);
          return 100; // Ensure progress doesn't exceed 100
        }
        return prev + step;
      });
    }, updateInterval);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    if (completed.toFixed(0) === "100") {
      setTimeout(() => {
        // alert("Time Out");
        router.push("/");
      }, 2500);
    }
  }, [completed]);

  return (
    <div className="border border-slate-700 p-4 text-center min-h-96 flex justify-center items-center bg-slate-800 ">
      <div className="border-0 border-red-800 w-full">
        <h6 className="mb-9 animate-pulse text-2xl ">Please Wait... While we are loading the Movie</h6>
        <ProgressBar
          completed={completed.toFixed(0)}
          className=""
          height="30px"
          customLabel={`${completed.toFixed(0)}%`}
        />
      </div>
    </div>
  );
};

export default WatchPageVideoFrame;
