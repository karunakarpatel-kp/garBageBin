import welcomePatelsImage from "./public/bappam-welcome-banner.jpg";
import pushpa2TheRule from "./public/pushpa-2-the-rule.jpg";
import amaranPoster from "./public/Amaran_2024_poster.jpg";
import mufasaPoster from "./public/mufasa-telugu-poster.jpg";
import kuberaPoster from "./public/kubera-poster.jpeg";

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
  TELUGU_MOVIES_PAGE_BASE_URL: string;
}

export const BASE_URLS: Base_Url_Props = {
  HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL!,
  TELUGU_MOVIES_PAGE_BASE_URL: `${process.env.HOME_PAGE_BASE_URL}/telugu-movies`,
};

interface Blog_Post_URL_Props {
  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;

  TELUGU_MOVIES_ABSOLUTE: string;
  TELUGU_MOVIES_RELATIVE: string;

  PRIVACY_PAGE_ABSOLUTE: string;
  PRIVACY_PAGE_RELATIVE: string;

  CONTACT_PAGE_ABSOLUTE: string;
  CONTACT_PAGE_RELATIVE: string;

  DISCLAIMER_PAGE_ABSOLUTE: string;
  DISCLAIMER_PAGE_RELATIVE: string;

  PUSHPA_2_ABSOLUTE: string;
  PUSHPA_2_RELATIVE: string;

  AMARAN_ABSOLUTE: string;
  AMARAN_RELATIVE: string;

  MUFASA_ABSOLUTE: string;
  MUFASA_RELATIVE: string;

  KUBERA_ABSOLUTE: string;
  KUBERA_RELATIVE: string;
}

export const blogPostURLS: Blog_Post_URL_Props = {
  HOME_PAGE_ABSOLUTE: BASE_URLS.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  TELUGU_MOVIES_ABSOLUTE: BASE_URLS.TELUGU_MOVIES_PAGE_BASE_URL,
  TELUGU_MOVIES_RELATIVE: "/telugu-movies",

  PRIVACY_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/privacy`,
  PRIVACY_PAGE_RELATIVE: "/privacy",

  CONTACT_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/contact`,
  CONTACT_PAGE_RELATIVE: "/contact",

  DISCLAIMER_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/disclaimer`,
  DISCLAIMER_PAGE_RELATIVE: "/disclaimer",

  PUSHPA_2_ABSOLUTE: `${BASE_URLS.TELUGU_MOVIES_PAGE_BASE_URL}/pushpa-2-the-rule`,
  PUSHPA_2_RELATIVE: "/telugu-movies/pushpa-2-the-rule",

  AMARAN_ABSOLUTE: `${BASE_URLS.TELUGU_MOVIES_PAGE_BASE_URL}/amaran`,
  AMARAN_RELATIVE: "/telugu-movies/amaran",

  MUFASA_ABSOLUTE: `${BASE_URLS.TELUGU_MOVIES_PAGE_BASE_URL}/mufasa-the-lion-king`,
  MUFASA_RELATIVE: "/telugu-movies/mufasa-the-lion-king",

  KUBERA_ABSOLUTE: `${BASE_URLS.TELUGU_MOVIES_PAGE_BASE_URL}/kubera`,
  KUBERA_RELATIVE: "/telugu-movies/kubera",
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
    title: "Watch BAPPAM Telugu Movies in HD | BAPPAM TV",
    description:
      "BAPPAM TV is all about newly released telugu hd movie reviews and the collections. Here at bappam tv, you can watch, learn, and download recently released telugu movies in hd quality.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-01-08T11:37:55 IST",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "bappamtv-homepage",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/bappam-welcome-banner.jpg`,
    changeFrequency: "daily",
    tags: [{ tag: "HomePage", href: "/" }],
  },
  // BlogPage  /Blog/
  TELUGU_MOVIES_PAGE: {
    absoluteURL: blogPostURLS.TELUGU_MOVIES_ABSOLUTE,
    relativeURL: blogPostURLS.TELUGU_MOVIES_RELATIVE,
    title: "Watch Telugu Movies in HD Quality | BAPPAM TV",
    description:
      "Here at bappam tv telugu movies, this is all about downloading and watching out recently released telugu movies. You can directly checkout the recently released telugu movies for free of cost.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-01-08T11:37:55 IST",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "bappamtv-homepage",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/bappam-welcome-banner.jpg`,
    changeFrequency: "daily",
    tags: [{ tag: "Telugu Movies", href: "/telugu-movies" }],
  },

  POLICY_PAGE: {
    absoluteURL: blogPostURLS.PRIVACY_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.PRIVACY_PAGE_RELATIVE,
    title: "Privacy Policy | bappamtv",
    description:
      "Welcome to bappam tv privacy policy. In here you can find all the details about privacy policy of bappam tv website",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-01-08T11:37:55 IST",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "bappamtv-homepage",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/bappam-welcome-banner.jpg`,
    changeFrequency: "daily",
    tags: [{ tag: "Privacy", href: "/privacy" }],
  },

  CONTACT_PAGE: {
    absoluteURL: blogPostURLS.CONTACT_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CONTACT_PAGE_RELATIVE,
    title: "Contact Us | bappamtv",
    description:
      "Welcome to bappam tv contact page. In here you can find all the details of about bappam tv contact information and a way to contact administrator of the bappam tv site.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-01-08T11:37:55 IST",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "bappamtv-homepage",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/bappam-welcome-banner.jpg`,
    changeFrequency: "daily",
    tags: [{ tag: "contact", href: "/contact" }],
  },

  DISCLAIMER_PAGE: {
    absoluteURL: blogPostURLS.DISCLAIMER_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.DISCLAIMER_PAGE_RELATIVE,
    title: "Disclaimer | bappam tv",
    description:
      "Welcome to bappam tv disclaimer page. In here you can find all the details of about bappam tv's Disclaimer and its privacy policies.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-01-08T11:37:55 IST",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "bappamtv-homepage",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/bappam-welcome-banner.jpg`,
    changeFrequency: "daily",
    tags: [{ tag: "disclaimer", href: "/disclaimer" }],
  },

  // Pushpa 2 - The Rule
  PUSHPA_2_THE_RULE: {
    absoluteURL: blogPostURLS.PUSHPA_2_ABSOLUTE,
    relativeURL: blogPostURLS.PUSHPA_2_RELATIVE,
    title: "Pushpa 2 - The Rule Telugu Movie - bappam tv.",
    description:
      "Check the latest telugu movie Pushpa 2 - The Rule in bappam tv. You can watch the trailers, give reviews or even you can watch and download the movie at excellent hd quality.",
    publishedTime: "2025-01-08T11:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Pushpa 2 The Rule", href: `${blogPostURLS.PUSHPA_2_RELATIVE}` },
      { tag: "bappam tv", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Pushpa 2", href: `${blogPostURLS.PUSHPA_2_RELATIVE}` },
      { tag: "Pushpa 2 Review", href: `${blogPostURLS.PUSHPA_2_RELATIVE}` },
    ],
    featuredImage: pushpa2TheRule,
    featuredImageAltText: "pushpa-2-the-rule",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/pushpa-2-the-rule.png`,
  },

  AMARAN: {
    absoluteURL: blogPostURLS.AMARAN_ABSOLUTE,
    relativeURL: blogPostURLS.AMARAN_RELATIVE,
    title: "AMARAN Telugu Movie - bappam tv.",
    description:
      "Check the latest telugu movie Amaran! This amazing film tells the story of a brave soldier, Major Mukund, and his incredible journey. You can watch the trailers, read reviews, or even enjoy the movie in hd quality.",
    publishedTime: "2025-01-08T11:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "AMARAN", href: `${blogPostURLS.AMARAN_RELATIVE}` },
      { tag: "bappam tv", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "AMARAN", href: `${blogPostURLS.AMARAN_RELATIVE}` },
      { tag: "AMARAN Review", href: `${blogPostURLS.AMARAN_RELATIVE}` },
    ],
    featuredImage: amaranPoster,
    featuredImageAltText: "amaran-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/Amaran_2024_poster.jpg`,
  },
  MUFASA: {
    absoluteURL: blogPostURLS.MUFASA_ABSOLUTE,
    relativeURL: blogPostURLS.MUFASA_RELATIVE,
    title: "Mufasa-The Lion King Telugu Movie - bappam tv.",
    description:
      "The new movie Mufasa: The Lion King has been released in theaters today. It's a story about Mufasa before The Lion King movie which you can watch here at bappam tv in hd quality.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-01-08T11:37:55 IST",
    tags: [
      { tag: "Mufasa, The Lion King", href: `${blogPostURLS.MUFASA_RELATIVE}` },
      { tag: "bappam tv", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Mufasa The Lion King bappam tv", href: `${blogPostURLS.MUFASA_RELATIVE}` },
      { tag: "Mufasa The Lion King", href: `${blogPostURLS.MUFASA_RELATIVE}` },
    ],
    featuredImage: mufasaPoster,
    featuredImageAltText: "Mufasa-The-Lion-King-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/mufasa-telugu-poster.jpg`,
  },

  KUBERA: {
    absoluteURL: blogPostURLS.MUFASA_ABSOLUTE,
    relativeURL: blogPostURLS.MUFASA_RELATIVE,
    title: "Watch Kubera Telugu Movie – Honest Review, Story, and Verdict",
    description:
      "Watch Kubera telugu movie and read our honest review of shekar kammula’s interesting drama. Discover the plot, performance, twist and why this movie is a must-watch.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-07-22T11:00:55 IST",
    tags: [
      { tag: "Kubera 2025", href: `${blogPostURLS.KUBERA_RELATIVE}` },
      { tag: "bappam tv", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Kubera Review", href: `${blogPostURLS.KUBERA_RELATIVE}` },
      { tag: "Kubera Movie", href: `${blogPostURLS.KUBERA_RELATIVE}` },
    ],
    featuredImage: kuberaPoster,
    featuredImageAltText: "kubera-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/kubera-poster.jpeg`,
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
  {
    id: 1,
    url: `${blogPostURLS.AMARAN_RELATIVE}`,
    title: `${SEO_OBJ.AMARAN.title}`,
    description: `${SEO_OBJ.AMARAN.description}`,
    lastUpdateTime: `${SEO_OBJ.AMARAN.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.AMARAN.publishedTime}`,
    tags: SEO_OBJ.AMARAN.tags!,
    featuredImage: SEO_OBJ.AMARAN.featuredImage,
    featuredImageAltText: `${SEO_OBJ.AMARAN.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.AMARAN.ogImageURL}`,
  },
  {
    id: 2,
    url: `${blogPostURLS.MUFASA_RELATIVE}`,
    title: `${SEO_OBJ.MUFASA.title}`,
    description: `${SEO_OBJ.MUFASA.description}`,
    lastUpdateTime: `${SEO_OBJ.MUFASA.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.MUFASA.publishedTime}`,
    tags: SEO_OBJ.MUFASA.tags!,
    featuredImage: SEO_OBJ.MUFASA.featuredImage,
    featuredImageAltText: `${SEO_OBJ.MUFASA.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.MUFASA.ogImageURL}`,
  },
  {
    id: 3,
    url: `${blogPostURLS.KUBERA_RELATIVE}`,
    title: `${SEO_OBJ.KUBERA.title}`,
    description: `${SEO_OBJ.KUBERA.description}`,
    lastUpdateTime: `${SEO_OBJ.KUBERA.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.KUBERA.publishedTime}`,
    tags: SEO_OBJ.KUBERA.tags!,
    featuredImage: SEO_OBJ.KUBERA.featuredImage,
    featuredImageAltText: `${SEO_OBJ.KUBERA.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.KUBERA.ogImageURL}`,
  },
];
