"use client";

import { useParams } from "next/navigation";
import React from "react";

const WatchPageTitle = () => {
  const params = useParams();
  const movieName = params.movieName as string;
  const paramTitle = movieName.replaceAll("-", " ");
  return <h1 className="capitalize">{`Watch ${paramTitle} Telugu Full Movie`}</h1>;
};

export default WatchPageTitle;
