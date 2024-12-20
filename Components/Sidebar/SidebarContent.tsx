"use client";

import MDXImage from "Components/MDXImage";
import { blogPostsObj } from "Essential";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarContent = () => {
  const presentURL = usePathname();

  const filteredObjWithoutPresentURL = blogPostsObj.filter((singleURL) => presentURL !== singleURL.url);
  const lastThreePublishedArticles = filteredObjWithoutPresentURL.slice(-3);

  return (
    <>
      <section>
        <div className="flex flex-col justify-between  border border-slate-300 dark:border-slate-800 shadow-sm p-0 px-6 py-4 mt-0 ">
          {/* <div className="text-2xl font-semibold mb-0 ">Watch the Latest</div> */}
          <div className="LoadingUI ">
            {lastThreePublishedArticles !== null &&
              lastThreePublishedArticles.map((singleBlogPost, index) => {
                return (
                  <div key={index} className=" shadow-sm md:shadow-sm mt-0 m-auto no-underline h-full ">
                    <Link href={singleBlogPost.url} className="no-underline m-0 ">
                      <MDXImage
                        src={singleBlogPost.featuredImage}
                        alt={singleBlogPost.featuredImageAltText}
                        extraStyling="h-fit w-full max-w-[380px] min-h-[400px]  m-auto -mb-3 "
                      />
                      <h1 className="break-words px-5 underline font-medium !text-2xl !mb-8">{singleBlogPost.title}</h1>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SidebarContent;
