import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { SEO_OBJ } from "Essential";
import MovieList from "Components/UI/HomePage/MovieList";

import FinalUIRender from "Components/UI/HomePage/FinalUIRender";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

export default function Home() {
  return (
    <>
      <MovieList />
      {/* The below code is to display the Blank screen and the bappamTV logo. */}
      {/* <FinalUIRender /> */}
    </>
  );
}
