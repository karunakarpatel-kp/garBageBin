import { SEO_OBJ, blogPostsObj } from "Essential";
import { Metadata } from "next";
import React from "react";

export function CustomMetaData(props: any) {
  const { presentURL } = props;
  const SEO_OBJ_VALUES = Object.values(SEO_OBJ);

  const filteredURL = SEO_OBJ_VALUES.map((singleOBJ) => singleOBJ.absoluteURL).filter(
    (singleOBJURL) => singleOBJURL === presentURL
  );

  const filteredOBJ = SEO_OBJ_VALUES.filter((singleOBJ) => {
    return singleOBJ.absoluteURL === presentURL;
  });
  // console.log({ filteredOBJ, filteredURL });

  const metaDataOBJ: Metadata = {
    metadataBase: new URL(filteredOBJ[0].absoluteURL),
    title: filteredOBJ[0].title,
    description: filteredOBJ[0].description,
    verification: {
      google: process.env.GOOGLE_ANALYTICS_TAG,
    },
    // Added Google Console Tag Below
    other: {
      // "google-site-verification": "ltQ1SKk6_-3Ng5KFPA9PmkjStWZN9zbvCKbhjOoeapg",
      "google-site-verification": process.env.GOOGLE_CONSOLE_TAG as string,
    },
    category: filteredOBJ[0].category,
    keywords: ["bappamtv", "bappam tv", "bappamtv movies hd", "bappamtv movies"],
    creator: "bappamtv",
    openGraph: {
      title: filteredOBJ[0].title,
      description: filteredOBJ[0].description,
      type: "article",
      publishedTime: filteredOBJ[0].publishedTime,
      modifiedTime: filteredOBJ[0].lastUpdateTime,
      authors: ["bappamtv"],
      images: [filteredOBJ[0].ogImageURL],
    },

    // twitter: {
    //   card: "summary_large_image",
    //   site: "https://twitter.com/Karna_Patel_",
    //   creator: "@Karna_Patel_",
    //   creatorId: "https://twitter.com/Karna_Patel_",
    // },

    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
  // console.log(metaDataOBJ, "META DATA OBJ");
  return metaDataOBJ;
}
