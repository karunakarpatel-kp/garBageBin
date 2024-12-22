import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { SEO_OBJ, blogPostsObj } from "Essential";
import { Metadata } from "next";

import FinalUIRender from "Components/UI/HomePage/FinalUIRender";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

export default function Home() {
  return (
    <>
      <FinalUIRender />
    </>
  );
}
