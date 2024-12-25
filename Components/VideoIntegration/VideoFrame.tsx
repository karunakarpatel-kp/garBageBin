"use client";
import Image from "next/image";
import React from "react";
import videoImage from "@Public/video-player.png";
import { usePathname } from "next/navigation";

interface videoFrameProps {
  url: string;
}

const VideoFrame = (props: videoFrameProps) => {
  const { url } = props;
  const pathName = usePathname();

  const onVideoClickHandler = () => {
    window.open(`watch/${url}`, "");
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
