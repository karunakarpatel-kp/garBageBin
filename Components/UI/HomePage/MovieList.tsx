import { blogPostsObj } from "Essential";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieList = () => {
  return (
    <>
      <div className="border-0 border-white text-white pt-10 bg-brandColor dark:bg-slate-900 dark:border-b dark:border-b-slate-800 ">
        <div className="text-white border-0 text-center py-9 mt-10">
          <h1 className="text-white font-bold text-3xl md:text-4xl break-words">Where Quality & Clarity Matters</h1>
          <p className="text-white text-xl px-4 md:w-3/5 lg:w-3/5 m-auto">
            Watch / download Telugu movies in an excellent quality at the smallest file size. Exclusively designed &
            developed for smartphones, tablets and PCs.
          </p>
          <p>Beware of fake iBomma apps, sites</p>
        </div>
      </div>

      <div className="LoadingUI grid  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-11  mt-0 mb-8 mx-2 ">
        {blogPostsObj.map((singleBlogPost, index) => {
          return (
            <div
              key={index}
              className=" shadow-sm md:shadow-sm mt-0 m-auto p-0 md:p-0 no-underline dark:bg-slate-900 hover:underline hover:underline-offset-4 h-full relative"
            >
              <Link href={singleBlogPost.url} className="no-underline ">
                <Image
                  src={singleBlogPost.featuredImage}
                  alt={singleBlogPost.featuredImageAltText}
                  className="mt-3 mb-3  h-[350px] ring-1 rounded-md bg-slate-800 dark:bg-slate-800 m-auto border-0 max-w-xs lg:w-auto"
                />
                <div className="z-50 text-center -mt-12 ">
                  <p className=" text-[#fffe08]  inline-block p-0 px-4 text-center m-auto bg-slate-800 rounded-md shadow-xl ">
                    {singleBlogPost.publishedTime.split("-")[0]}
                  </p>
                </div>
                <h1 className="text-xl lg:text-xl leading-snug  break-words font-bold font-sans mt-4 px-1 text-center">
                  {singleBlogPost.title}
                </h1>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;
