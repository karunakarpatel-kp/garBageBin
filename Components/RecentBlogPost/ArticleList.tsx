"use client";

import { blogPostsObj } from "Essential";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ArticleList = () => {
  const presentURL = usePathname();
  const filteredObjWithoutPresentURL = blogPostsObj.filter((singleURL) => presentURL !== singleURL.url);
  const lastThreePublishedArticles = filteredObjWithoutPresentURL;
  return (
    <>
      <div className="text-3xl font-semibold mt-10 pl-3 mb-6  pb-4 border-t border-b border-dashed pt-4">
        <h6>Latest Movies</h6>
      </div>
      <ul className="LoadingUI mx-2 underline-offset-4 ">
        {lastThreePublishedArticles !== null &&
          lastThreePublishedArticles.map((singleBlogPost, index) => {
            return (
              <li key={index}>
                <Link href={singleBlogPost.url}>{singleBlogPost.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ArticleList;
