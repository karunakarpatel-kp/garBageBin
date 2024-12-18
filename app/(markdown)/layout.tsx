import React from "react";
import { MdLightMode } from "react-icons/md";
import { FaArrowCircleUp } from "react-icons/fa";
import Link from "next/link";
import TypedAnimation from "Components/Animations/TypedAnimation";
import RecentBlogPost from "Components/RecentBlogPost/RecentBlogPost";
import Sidebar from "Components/Sidebar/Sidebar";
import Article from "Components/Article/Article";
// import Sharing from "@Components/SocialShare/Sharing";
// import TypedAnimation from "@Components/Animations/TypedAnimation";

const BlogPostLayoutUI = (props: any) => {
  return (
    <>
      <section className="border-0 border-green-900 w-full grid grid-cols-12 mt-11 md:mt-20 prose prose-slate prose-xl prose-headings:text-3xl  prose-headings:my-4 md:prose-lg md:prose-h1:text-4xl md:prose-h1:leading-tight lg:prose-xl   md:prose-img:h-[520px] lg:max-w-screen-2xl dark:prose-invert ">
        <Article incomingProps={props} />
        <Sidebar />
      </section>
      <section>
        <Link href="#top" className=" scroll-smooth ">
          <div className="darkMode fixed bottom-32 right-0 border bg-brandColor text-white border-slate-700 p-2 pt-3 px-4 cursor-pointer rounded-s-2xl dark:bg-slate-900  dark:text-black shadow-inner z-50 scroll-smooth">
            <FaArrowCircleUp size={25} fill="white" className="animate-bounce" />
          </div>
        </Link>
      </section>
      {/* <RecentBlogPost /> */}
    </>
  );
};

export default BlogPostLayoutUI;
