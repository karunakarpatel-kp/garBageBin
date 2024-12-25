import React from "react";
import { MdLightMode } from "react-icons/md";
import { FaArrowCircleUp } from "react-icons/fa";
import Link from "next/link";
import Sharing from "Components/SocialShare/Sharing";
import SidebarContent from "Components/Sidebar/SidebarContent";
import ArticleList from "Components/RecentBlogPost/ArticleList";

const DisclaimerPageLayoutUI = (props: any) => {
  return (
    <>
      <div className="container border-0 mt-20 grid grid-cols-12 prose-table:border prose-table:border-slate-600 prose-th:text-xl prose-th:text-center prose-th:py-2 prose-th:border-r prose-td:p-3 prose-td:border-r prose-td:border-slate-800 prose-th:border-slate-800 prose-td:text-center prose-table:overflow-x-scroll underline-offset-4 ">
        <div className="one border-0 border-white hidden md:block col-span-3">
          <SidebarContent />
          {/* <ArticleList /> */}
        </div>
        <div className="one border-0 border-cyan-600 col-span-12 md:col-span-6 lg:col-span-6">
          <section
            className="p-3 mb-4 prose-lg prose-slate md:prose-lg lg:prose-xl dark:prose-invert  prose-h1:leading-slug md:prose-img:h-[520px]  prose-img:rounded-lg  "
            id="top"
          >
            {props.children}
            <Sharing />
          </section>
        </div>
        <div className="one border-0 border-red  hidden md:block col-span-3">
          <ArticleList />
          {/* <SidebarContent /> */}
        </div>
      </div>
      <section></section>

      <section>
        <Link href="#top" className=" scroll-smooth ">
          <div className="darkMode fixed bottom-32 right-0 border bg-black text-white border-slate-700 p-2 pt-3 px-4 cursor-pointer rounded-s-2xl dark:bg-slate-900  dark:text-black shadow-inner z-50 scroll-smooth">
            <FaArrowCircleUp size={25} fill="white" className="animate-bounce" />
          </div>
        </Link>
      </section>
    </>
  );
};

export default DisclaimerPageLayoutUI;
