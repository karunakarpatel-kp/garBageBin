import TypedAnimation from "Components/Animations/TypedAnimation";
import Sharing from "Components/SocialShare/Sharing";
import React from "react";

const Article = ({ incomingProps }: any) => {
  return (
    <>
      <article className="border-0 md:border border-slate-50 rounded-sm px-5 lg:px-3  py-3 break-words col-span-12 lg:col-span-8 prose-table:border dark:border-slate-800 prose-th:text-xl prose-th:text-center prose-th:py-2 prose-th:border-r prose-td:p-3 prose-td:border-r prose-td:border-slate-800 prose-th:border-slate-800 prose-td:text-center ">
        {incomingProps.children}
        <section className="border-t border-slate-800 pt-4">
          <TypedAnimation />
        </section>
        <Sharing />
      </article>
    </>
  );
};

export default Article;