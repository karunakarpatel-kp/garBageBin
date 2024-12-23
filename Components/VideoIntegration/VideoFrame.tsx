"use client";
import Image from "next/image";
import React from "react";
import videoImage from "@Public/video-player.png";
import { usePathname } from "next/navigation";

const VideoFrame = () => {
  const pathName = usePathname();

  const onVideoClickHandler = () => {
    if (pathName !== "/watch-movie") {
      window.open("/telugu-movies", "chromewidth");
    }
  };

  return (
    <div className="cursor-pointer" onClick={onVideoClickHandler}>
      {/* <video controls autoFocus loop preload="false" className="w-full h-auto ring-1 rounded-sm">
        <source src="/video.mp4" type="video/mp4" />
      </video> */}
      <Image src={videoImage} alt="video-overlay-image" className="ring-1 rounded-sm hover:ring-cyan-500" />
    </div>
  );
};

export default VideoFrame;
