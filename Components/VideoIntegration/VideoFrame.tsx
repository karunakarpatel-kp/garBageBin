"use client";
import Image from "next/image";
import React from "react";
import videoImage from "@Public/video-player.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface videoFrameProps {
  url: string;
}

const VideoFrame = (props: videoFrameProps) => {
  const { url } = props;
  const pathName = usePathname();

  const onVideoClickHandler = () => {
    // window.open(`watch/${url}`, ""); // Open the Watch Page in another TAB...
  };

  return (
    <div className="cursor-pointer" onClick={onVideoClickHandler}>
      {/* <video controls autoFocus loop preload="false" className="w-full h-auto ring-1 rounded-sm">
        <source src="/video.mp4" type="video/mp4" />
      </video> */}
      <Link href={`watch/${url}`}>
        <Image src={videoImage} alt="video-overlay-image" className="ring-1 rounded-sm hover:ring-cyan-500" />
      </Link>
    </div>
  );
};

export default VideoFrame;
