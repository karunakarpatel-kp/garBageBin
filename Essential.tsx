import welcomePatelsImage from "./public/iBOMMA.jpg";
import pushpa2TheRule from "./public/pushpa-2-the-rule.jpg";

export const DateMonthYearForBlogPost = (lastUpdateTime: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(lastUpdateTime);
  const day = date.getDate();
  const month = months[date.getMonth()]; // Months are 0-based in JavaScript Dates
  const year = date.getFullYear();
  // console.log(`${day}/${month}/${year}`, "DATE");
  return `${day}, ${month}, ${year}`;
};

export const dynamicLastUpdatedTime = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are 0-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
  return formattedDate;
};

interface Base_Url_Props {
  HOME_PAGE_BASE_URL: string;
  BLOG_PAGE_BASE_URL: string;
}

export const BASE_URLS: Base_Url_Props = {
  HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL!,
  BLOG_PAGE_BASE_URL: `${process.env.HOME_PAGE_BASE_URL}/Blog`,
};

interface Blog_Post_URL_Props {
  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;

  BLOG_PAGE_RELATIVE: string;
  BLOG_PAGE_ABSOLUTE: string;

  PRIVACY_PAGE_ABSOLUTE: string;
  PRIVACY_PAGE_RELATIVE: string;

  CONTACT_PAGE_ABSOLUTE: string;
  CONTACT_PAGE_RELATIVE: string;

  DISCLAIMER_PAGE_ABSOLUTE: string;
  DISCLAIMER_PAGE_RELATIVE: string;

  PUSHPA_2_ABSOLUTE: string;
  PUSHPA_2_RELATIVE: string;
}

export const blogPostURLS: Blog_Post_URL_Props = {
  HOME_PAGE_ABSOLUTE: BASE_URLS.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  BLOG_PAGE_ABSOLUTE: BASE_URLS.BLOG_PAGE_BASE_URL,
  BLOG_PAGE_RELATIVE: "/Blog",

  PRIVACY_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/privacy`,
  PRIVACY_PAGE_RELATIVE: "/privacy",

  CONTACT_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/contact`,
  CONTACT_PAGE_RELATIVE: "/contact",

  DISCLAIMER_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/disclaimer`,
  DISCLAIMER_PAGE_RELATIVE: "/disclaimer",

  PUSHPA_2_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/pushpa-2-the-rule`,
  PUSHPA_2_RELATIVE: "/pushpa-2-the-rule",
};

interface blogPostsObjProps {
  id: number;
  url: string;
  title: string;
  subtitle?: string;
  description?: string;
  lastUpdateTime: string;
  publishedTime: string;
  tags: { tag: string; href: string }[];
  featuredImage: any;
  featuredImageAltText: string;
  ogImageURL: string;
}

interface SEO_OBJ_Props {
  [key: string]: {
    absoluteURL: string;
    relativeURL: string;
    title: string;
    subtitle?: string;
    description?: string;
    lastUpdateTime: string;
    publishedTime: string;
    tags?: { tag: string; href: string }[];
    featuredImage: any;
    featuredImageAltText: string;
    ogImageURL: string;
    changeFrequency?: "weekly" | "daily" | "monthly" | "yearly";
    category?: string;
  };
}

export const SEO_OBJ: SEO_OBJ_Props = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "iBOMMA- Latest News, Movie Updates & Upcoming Releases",
    description:
      "Stay updated with the latest news, upcoming movie releases, and reviews on iBomma. Get all the details, release dates, and reviews in one place for the newest films hitting the screen at ibomma.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-12-17T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "iBOMMA-homepage",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "HomePage", href: "/" }],
  },
  // BlogPage  /Blog/
  BLOG_PAGE: {
    absoluteURL: blogPostURLS.BLOG_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.BLOG_PAGE_RELATIVE,
    title: "iBOMMA- Latest News, Movie Updates & Upcoming Releases",
    description:
      "Stay updated with the latest news, upcoming movie releases, and reviews on iBomma. Get all the details, release dates, and reviews in one place for the newest films hitting the screen at ibomma.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-12-17T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "iBOMMA-homepage",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "Blog", href: "/Blog" }],
  },

  POLICY_PAGE: {
    absoluteURL: blogPostURLS.PRIVACY_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.PRIVACY_PAGE_RELATIVE,
    title: "Privacy Policy | iBOMMA",
    description:
      "Welcome to iBOMMA privacy policy. In here you can find all the details about privacy policy of iBOMMA website",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-12-17T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "iBOMMA-homepage",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "Privacy", href: "/privacy" }],
  },

  CONTACT_PAGE: {
    absoluteURL: blogPostURLS.CONTACT_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CONTACT_PAGE_RELATIVE,
    title: "Contact Us | iBOMMA",
    description:
      "Welcome to iBOMMA contact page. In here you can find all the details of about iBOMMA contact information and a way to contact administrator of the iBOMMA site.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-12-17T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "iBOMMA-homepage",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "contact", href: "/contact" }],
  },

  DISCLAIMER_PAGE: {
    absoluteURL: blogPostURLS.DISCLAIMER_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.DISCLAIMER_PAGE_RELATIVE,
    title: "Disclaimer | iBOMMA",
    description:
      "Welcome to iBOMMA disclaimer page. In here you can find all the details of about iBOMMA's Disclaimer and its policies.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-12-17T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "iBOMMA-homepage",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "disclaimer", href: "/disclaimer" }],
  },

  // Pushpa 2 - The Rule
  PUSHPA_2_THE_RULE: {
    absoluteURL: blogPostURLS.PUSHPA_2_ABSOLUTE,
    relativeURL: blogPostURLS.PUSHPA_2_RELATIVE,
    title: "Pushpa 2 - The Rule Telugu Movie - iBOMMA.",
    description:
      " Check the latest review about the recently released telugu movie Pushpa 2 - The Rule in iBOMMA. You can watch the trailers, give reviews or even you can watch and download the movie at excellent quality.",
    publishedTime: "2024-12-17T19:07:55+00:00",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Pushpa 2 The Rule", href: `${blogPostURLS.PUSHPA_2_RELATIVE}` },
      { tag: "iBOMMA", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Pushpa 2", href: `${blogPostURLS.PUSHPA_2_RELATIVE}` },
      { tag: "Pushpa 2 Review", href: `${blogPostURLS.PUSHPA_2_RELATIVE}` },
    ],
    featuredImage: pushpa2TheRule,
    featuredImageAltText: "pushpa-2-the-rule",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/pushpa-2-the-rule.png`,
  },
};

export const blogPostsObj: blogPostsObjProps[] = [
  {
    id: 0,
    url: `${blogPostURLS.PUSHPA_2_RELATIVE}`,
    title: `${SEO_OBJ.PUSHPA_2_THE_RULE.title}`,
    description: `${SEO_OBJ.PUSHPA_2_THE_RULE.description}`,
    lastUpdateTime: `${SEO_OBJ.PUSHPA_2_THE_RULE.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.PUSHPA_2_THE_RULE.publishedTime}`,
    tags: SEO_OBJ.PUSHPA_2_THE_RULE.tags!,
    featuredImage: SEO_OBJ.PUSHPA_2_THE_RULE.featuredImage,
    featuredImageAltText: `${SEO_OBJ.PUSHPA_2_THE_RULE.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.PUSHPA_2_THE_RULE.ogImageURL}`,
  },
];
