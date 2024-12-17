import MDXImage from "Components/MDXImage";
import Sharing from "Components/SocialShare/Sharing";
import { blogPostsObj } from "Essential";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <aside className="border-0 border-slate-900 col-span-12 mt-5 lg:mt-0  lg:col-span-4 relative ">
        {/* Sticky Section */}
        {/* md:sticky */}
        <section className=" col-span-12 md:col-span-4 lg:col-span-4 border-0 border-red-700 p-0 lg:px-5  md:top-20  ">
          <section>
            <div className="flex flex-col justify-between  border border-slate-300 shadow-sm p-0 px-6 py-4 mt-0 ">
              {/* <div className="text-2xl font-semibold mb-0 ">Watch the Latest</div> */}
              <div className="LoadingUI ">
                {blogPostsObj
                  .map((singleBlogPost, index) => {
                    return (
                      <div key={index} className=" shadow-sm md:shadow-sm mt-0 m-auto no-underline h-full ">
                        <Link href={singleBlogPost.url} className="no-underline m-0 ">
                          <h1 className="break-words px-1 underline font-medium !text-2xl mb-0">
                            {singleBlogPost.title}
                          </h1>
                          <MDXImage
                            src={singleBlogPost.featuredImage}
                            alt={singleBlogPost.featuredImageAltText}
                            // className="mt-0 mb-3  h-[450px] ring-1 rounded-md bg-slate-200 dark:bg-slate-800"
                          />
                        </Link>
                      </div>
                    );
                  })
                  .reverse()}
              </div>
            </div>
          </section>
        </section>

        <section className=" col-span-12 md:col-span-4 lg:col-span-4 border-0 border-red-700 p-0  lg:px-5 mb-5 md:top-20 md:sticky">
          <div className="flex flex-col justify-between  border border-slate-300 shadow-sm p-0 px-6 py-4 mt-0 ">
            {/* <div className="text-2xl font-semibold mb-0 ">Watch the Latest</div> */}
            <div className="LoadingUI ">
              <div key={blogPostsObj[0].id} className=" shadow-sm md:shadow-sm mt-0 m-auto no-underline h-full ">
                <Link href={blogPostsObj[0].url} className="no-underline m-0 ">
                  <h1 className="break-words px-1 underline font-medium !text-2xl mb-0">{blogPostsObj[0].title}</h1>
                  <MDXImage
                    src={blogPostsObj[0].featuredImage}
                    alt={blogPostsObj[0].featuredImageAltText}
                    // className="mt-0 mb-3  h-[450px] ring-1 rounded-md bg-slate-200 dark:bg-slate-800"
                  />
                </Link>
              </div>
            </div>
          </div>
          <section className=" col-span-12 md:col-span-4 lg:col-span-4 border-0 border-red-700 mt-5 ">
            <div className="border border-slate-300 shadow-sm p-2 px-8 py-4 flex justify-center  ">
              <Sharing />
            </div>
          </section>
        </section>
      </aside>
    </>
  );
};

export default Sidebar;

<section className=" col-span-12 md:col-span-4 lg:col-span-4 border-0 border-red-700 p-0  lg:px-5 mb-5">
  <div className="flex flex-col justify-between  border border-slate-300 shadow-sm p-2 px-8 py-4 mt-0 ">
    <div className="text-2xl font-semibold mb-4 ">Seller Information</div>
    <span className="border border-brandColor border-dotted w-3/4 dark:border-white "></span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quas. Illo natus facere ducimus incidunt quaerat iusto
    quis fugit quisquam.
  </div>
</section>;

// {/* <section className=" col-span-12 md:col-span-4 lg:col-span-4 border-0 border-red-700 p-0 lg:px-5 md:sticky md:top-20 ">
//           <section>
//             <div className="flex flex-col justify-between  border border-slate-300 shadow-sm p-2 px-8 py-4 mt-0 ">
//               <div className="text-2xl font-semibold mb-4 ">Watch the Latest</div>
//               <span className="border border-brandColor border-dotted w-3/4 dark:border-white "></span>
//               <ol className="list-disc">
//                 <li>
//                   <span className="flex items-center ">
//                     <span className="pr-3">Email Verified</span>
//                     <span>
//                       {/* <MdVerified className="text-brandColor dark:text-white" /> */}
//                       Yes
//                     </span>
//                   </span>
//                 </li>
//                 <li>
//                   <span className="flex items-center ">
//                     <span className="pr-3">Phone Number Verified</span>
//                     <span>
//                       {/* <MdVerified className="text-brandColor dark:text-white" /> */}
//                       Yes
//                     </span>
//                   </span>
//                 </li>
//                 <li>
//                   <span className="flex items-center ">
//                     <span className="pr-3">Contact Infomration Verified</span>
//                     <span>
//                       {/* <MdVerified className="text-brandColor dark:text-white" /> */}
//                       Yes
//                     </span>
//                   </span>
//                 </li>
//                 <li>
//                   <span className="flex items-center ">
//                     <span className="pr-3">Governament ID Verified</span>
//                     <span>Yes</span>
//                   </span>
//                 </li>
//               </ol>
//             </div>
//           </section>
//           <section className=" col-span-12 md:col-span-4 lg:col-span-4 border-0 border-red-700 mt-5 ">
//             <div className="border border-slate-300 shadow-sm p-2 px-8 py-4 flex justify-center  ">
//               <Sharing />
//             </div>
//           </section>
//         </section> */}
