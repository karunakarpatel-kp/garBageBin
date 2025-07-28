import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { SEO_OBJ, blogPostsObj } from "Essential";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

export default function TeluguMovies() {
  return (
    <>
      <div className="border-0 border-white text-white pt-10 bg-brandColor dark:bg-slate-900 dark:border-b dark:border-b-slate-800">
        <div className="text-white border-0 text-center py-9 mt-10">
          <h1 className="text-white font-bold text-3xl md:text-4xl break-words">
            Watch and Download Telugu Movies in HD Quality.
          </h1>
          <p className="text-white text-xl px-4 md:w-3/5 lg:w-3/5 m-auto">
            Checkout the recent released movies and the movie reviews here at Bappam TV. You can also download and watch
            out the newly released movies in HD Quality for free of cost.
          </p>
        </div>
      </div>

      <div className="LoadingUI grid  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-11 mt-0 mb-8 mx-2 border-0 border-white">
        {blogPostsObj
          .map((singleBlogPost, index) => {
            return (
              <div
                key={index}
                className=" shadow-sm md:shadow-sm mt-0 m-auto p-0 md:p-0 no-underline dark:bg-slate-900 hover:underline hover:underline-offset-4 h-full relative border-0 border-green-800 "
              >
                <Link href={singleBlogPost.url} className="no-underline" title={singleBlogPost.title}>
                  <Image
                    src={singleBlogPost.featuredImage}
                    alt={singleBlogPost.featuredImageAltText}
                    className="mt-3 mb-3  h-[350px] ring-1 rounded-md bg-slate-800 dark:bg-slate-800 m-auto border-0 max-w-[98%] lg:w-auto"
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
          })
          .reverse()}
      </div>
    </>
  );
}

// Vertical Design
{
  /* <div className="LoadingUI grid grid-cols-12  mt-10 mb-8 mx-2 border-0 border-slate-100 hover:cursor-pointer hover:shadow-md hover:ring-1 hover:ring-offset-0 hover:ring-cyan-300 shadow-sm ">
        <div className="border-0 border-green-500 col-span-12 md:col-span-4 p-0 m-0 flex justify-center align-middle relative h-[220px] md:h-[auto] lg:h-[260px] ">
          <Image src={sampleImage} alt="sample-image" fill className="p-0 m-0 " />
        </div>
        <div className="rightSection border border-slate-200 col-span-12 md:col-span-8 pl-3 py-3">
          <div className="Title px-3">
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-semibold m-0 pb-3">
              Here is the Title Of the Blog Post of Karunakar Patel
            </h1>
            <p className="text-lg md:text-base  lg:text-xl leading-normal p-0 m-0 line-clamp-4 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus atque culpa explicabo illo alias iure
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus atque culpa explicabo illo alias iure
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus atque culpa explicabo illo alias iure
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus atque culpa explicabo illo alias iure
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus atque culpa explicabo illo alias iure
              ipsam magnam quas ratione dolorum?
            </p>
            <div className="flex  space-x-1 md:space-x-2 border-0 border-red-900 flex-wrap  justify-start space-y-2 items-baseline mt-1 md:mt-3 lg:mt-3">
              <div className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base md:text-sm lg:text-base ">
                Abomma
              </div>
              <div className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base md:text-sm lg:text-base ">
                Karunakar Patel
              </div>
              <div className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base md:text-sm lg:text-base ">
                Patel
              </div>
            </div>
          </div>
        </div>
      </div> */
}
