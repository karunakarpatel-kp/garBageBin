import welcomePatelsImage from "./public/iBOMMA-Featured-Image.png";
import pushpa2TheRule from "./public/pushpa-2-the-rule.jpg";
import amaranPoster from "./public/Amaran_2024_poster.jpg";
import thangalaanPoster from "./public/Thangalaan_poster.jpg";
import luckyBaskharPoster from "./public/Lucky_Baskhar_film_poster.jpg";
import kanguvaPoster from "./public/Kanguva_poster.jpg";
import KAPoster from "./public/KA_Telugu_film_poster.jpg";
import harikathaPoster from "./public/HariKatha_poster.jpg";
import jigraPoster from "./public/jigra-poster-2024.jpg";
import mechanicRockyPoster from "./public/mechanic-rocky-poster.jpg";
import mufasaPoster from "./public/mufasa-telugu-poster.jpg";
import pottelPoster from "./public/pottel-poster.jpg";
import leelaVinodhamPoster from "./public/leela-vinodham-poster.jpg";
import zebraPoster from "./public/zebra-poster.png";
import sirPoster from "./public/Sir_(2024_film)_poster.jpg";
import bachhalaMalliPoster from "./public/bachalamalli-poster.jpg";

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

  THANGALAAN_ABSOLUTE: string;
  THANGALAAN_RELATIVE: string;

  LUCKY_BASKHAR_ABSOLUTE: string;
  LUCKY_BASKHAR_RELATIVE: string;

  KANGUVA_ABSOLUTE: string;
  KANGUVA_RELATIVE: string;

  KA_ABSOLUTE: string;
  KA_RELATIVE: string;

  HARIKATHA_ABSOLUTE: string;
  HARIKATHA_RELATIVE: string;

  JIGRA_ABSOLUTE: string;
  JIGRA_RELATIVE: string;

  MECHANIC_ROCKY_ABSOLUTE: string;
  MECHANIC_ROCKY_RELATIVE: string;

  MUFASA_ABSOLUTE: string;
  MUFASA_RELATIVE: string;

  POTTEL_ABSOLUTE: string;
  POTTEL_RELATIVE: string;

  LEELA_VINODHAM_ABSOLUTE: string;
  LEELA_VINODHAM_RELATIVE: string;

  ZEBRA_ABSOLUTE: string;
  ZEBRA_RELATIVE: string;

  SIR_ABSOLUTE: string;
  SIR_RELATIVE: string;

  BACHHALA_MALLI_ABSOLUTE: string;
  BACHHALA_MALLI_RELATIVE: string;
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

  PUSHPA_2_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/pushpa-2-the-rule`,
  PUSHPA_2_RELATIVE: "/pushpa-2-the-rule",

  AMARAN_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/Amaran`,
  AMARAN_RELATIVE: "/Amaran",

  THANGALAAN_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/Thangalaan`,
  THANGALAAN_RELATIVE: "/Thangalaan",

  LUCKY_BASKHAR_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/Lucky-Baskhar`,
  LUCKY_BASKHAR_RELATIVE: "/Lucky-Baskhar",

  KANGUVA_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/Kanguva`,
  KANGUVA_RELATIVE: "/Kanguva",

  KA_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/KA`,
  KA_RELATIVE: "/KA",

  HARIKATHA_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/Harikatha`,
  HARIKATHA_RELATIVE: "/Harikatha",

  JIGRA_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/Jigra`,
  JIGRA_RELATIVE: "/Jigra",

  MECHANIC_ROCKY_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/Mechanic-Rocky`,
  MECHANIC_ROCKY_RELATIVE: "/Mechanic-Rocky",

  MUFASA_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/Mufasa-The-Lion-King`,
  MUFASA_RELATIVE: "/Mufasa-The-Lion-King",

  POTTEL_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/pottel`,
  POTTEL_RELATIVE: "/pottel",

  LEELA_VINODHAM_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/leela-vinodham`,
  LEELA_VINODHAM_RELATIVE: "/leela-vinodham",

  ZEBRA_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/zebra-telugu-movie`,
  ZEBRA_RELATIVE: "/zebra-telugu-movie",

  SIR_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/sir-telugu-movie`,
  SIR_RELATIVE: "/sir-telugu-movie",

  BACHHALA_MALLI_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/bachhala-malli`,
  BACHHALA_MALLI_RELATIVE: "/bachhala-malli",
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
    publishedTime: "2024-12-18T15:37:55 IST",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "iBOMMA-homepage",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/iBOMMA-Featured-Image.png`,
    changeFrequency: "daily",
    tags: [{ tag: "HomePage", href: "/" }],
  },
  // BlogPage  /Blog/
  TELUGU_MOVIES_PAGE: {
    absoluteURL: blogPostURLS.TELUGU_MOVIES_ABSOLUTE,
    relativeURL: blogPostURLS.TELUGU_MOVIES_RELATIVE,
    title: "iBOMMA- Latest Telugu Movies, Updates & Upcoming Releases",
    description:
      "Stay updated with the latest telugu news, upcoming movie releases, and reviews on iBomma. Get all the details, release dates, and reviews in one place for the newest films hitting the screen at ibomma.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-12-19T15:37:55 IST",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "iBOMMA-homepage",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/iBOMMA-Featured-Image.png`,
    changeFrequency: "daily",
    tags: [{ tag: "Telugu Movies", href: "/telugu-movies" }],
  },

  POLICY_PAGE: {
    absoluteURL: blogPostURLS.PRIVACY_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.PRIVACY_PAGE_RELATIVE,
    title: "Privacy Policy | iBOMMA",
    description:
      "Welcome to iBOMMA privacy policy. In here you can find all the details about privacy policy of iBOMMA website",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-12-18T15:37:55 IST",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "iBOMMA-homepage",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/iBOMMA-Featured-Image.png`,
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
    publishedTime: "2024-12-18T15:37:55 IST",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "iBOMMA-homepage",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/iBOMMA-Featured-Image.png`,
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
    publishedTime: "2024-12-18T15:37:55 IST",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "iBOMMA-homepage",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/iBOMMA-Featured-Image.png`,
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
    publishedTime: "2024-12-18T15:37:55 IST",
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

  AMARAN: {
    absoluteURL: blogPostURLS.AMARAN_ABSOLUTE,
    relativeURL: blogPostURLS.AMARAN_RELATIVE,
    title: "AMARAN Telugu Movie - iBOMMA.",
    description:
      "iBOMMA, Check out the latest review about the recently released Telugu movie Amaran! This amazing film tells the story of a brave soldier, Major Mukund, and his incredible journey. You can watch the trailers, read reviews, or even enjoy the movie in excellent quality. Don't miss this inspiring tale of courage, love, and heroism!",
    publishedTime: "2024-12-19T15:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "AMARAN", href: `${blogPostURLS.AMARAN_RELATIVE}` },
      { tag: "iBOMMA", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "AMARAN", href: `${blogPostURLS.AMARAN_RELATIVE}` },
      { tag: "AMARAN Review", href: `${blogPostURLS.AMARAN_RELATIVE}` },
    ],
    featuredImage: amaranPoster,
    featuredImageAltText: "amaran-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/Amaran_2024_poster.jpg`,
  },

  THANGALAAN: {
    absoluteURL: blogPostURLS.THANGALAAN_ABSOLUTE,
    relativeURL: blogPostURLS.THANGALAAN_RELATIVE,
    title: "Thangalaan Telugu Movie - iBOMMA.",
    description:
      "iBOMMA, Check out the latest review about the recently released Telugu movie Thangalaan! This amazing film tells the story of a brave farmer Thangalaan, and his incredible family journey. You can watch the trailers, read reviews, or even enjoy the movie in excellent quality. Don't miss this inspiring tale of courage, love, and heroism!",
    publishedTime: "2024-12-19T15:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "THANGALAAN", href: `${blogPostURLS.THANGALAAN_RELATIVE}` },
      { tag: "iBOMMA", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Thangalaan", href: `${blogPostURLS.THANGALAAN_RELATIVE}` },
      { tag: "Thangalaan Review", href: `${blogPostURLS.THANGALAAN_RELATIVE}` },
    ],
    featuredImage: thangalaanPoster,
    featuredImageAltText: "thangalaan-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/Thangalaan_poster.jpg`,
  },

  LUCKY_BASKHAR: {
    absoluteURL: blogPostURLS.LUCKY_BASKHAR_ABSOLUTE,
    relativeURL: blogPostURLS.LUCKY_BASKHAR_RELATIVE,
    title: "Lucky Baskhar Telugu Movie - iBOMMA.",
    description:
      "iBOMMA, Check out the latest review about the recently released Telugu movie Lucky Baskhar! This amazing film tells the story of a poor man who starts doing money scams as he was struggling to take care of his family while dealing with debt and feeling ashamed.You can watch the trailers, read reviews, or even enjoy the Lucky Baskhar movie in excellent quality. Don't miss this inspiring tale of courage, love, and heroism!",
    publishedTime: "2024-12-19T15:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Lucky Baskhar", href: `${blogPostURLS.LUCKY_BASKHAR_RELATIVE}` },
      { tag: "iBOMMA", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Lucky Baskhar", href: `${blogPostURLS.LUCKY_BASKHAR_RELATIVE}` },
      { tag: "Lucky Baskhar review", href: `${blogPostURLS.LUCKY_BASKHAR_RELATIVE}` },
    ],
    featuredImage: luckyBaskharPoster,
    featuredImageAltText: "lucky-baskhar-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/Lucky_Baskhar_film_poster.jpg`,
  },

  KANGUVA: {
    absoluteURL: blogPostURLS.KANGUVA_ABSOLUTE,
    relativeURL: blogPostURLS.KANGUVA_RELATIVE,
    title: " Kanguva Telugu Movie - iBOMMA.",
    description:
      "Watch the newly released Kanguva movie in iBOMMA and also check out the latest reviews and updates. This amazing film tells the story of a bounty hunter in 2024, whose connection with a child is mysteriously connected to a fierce tribal warrior's promise to a child in the year 1070. You can watch the trailers, read reviews, or even enjoy the movie in excellent quality. Don't miss this inspiring tale of courage, love, and heroism!",
    publishedTime: "2024-12-19T15:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Kanguva", href: `${blogPostURLS.KANGUVA_RELATIVE}` },
      { tag: "iBOMMA", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Kanguva iBOMMA", href: `${blogPostURLS.KANGUVA_RELATIVE}` },
      { tag: "Kanguva review", href: `${blogPostURLS.KANGUVA_RELATIVE}` },
    ],
    featuredImage: kanguvaPoster,
    featuredImageAltText: "kanguva-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/Kanguva_poster.jpg`,
  },

  KA: {
    absoluteURL: blogPostURLS.KA_ABSOLUTE,
    relativeURL: blogPostURLS.KA_RELATIVE,
    title: "KA Telugu Movie - iBOMMA.",
    description:
      "Watch the newly released KA Telugu movie in iBOMMA and also check out the latest reviews and updates, watch the trailers, read reviews, or even enjoy the movie in excellent quality.",
    publishedTime: "2024-12-19T15:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "KA", href: `${blogPostURLS.KA_RELATIVE}` },
      { tag: "iBOMMA", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "KA iBOMMA", href: `${blogPostURLS.KA_RELATIVE}` },
      { tag: "KA review", href: `${blogPostURLS.KA_RELATIVE}` },
    ],
    featuredImage: KAPoster,
    featuredImageAltText: "KA-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/KA_Telugu_film_poster.jpg`,
  },

  HARIKATHA: {
    absoluteURL: blogPostURLS.HARIKATHA_ABSOLUTE,
    relativeURL: blogPostURLS.HARIKATHA_RELATIVE,
    title: "HariKatha Telugu Web Series- iBOMMA.",
    description:
      "Watch the newly released HariKatha Telugu series 2024 in iBOMMA and also check out the latest reviews and updates, watch the trailers, read reviews, or even enjoy the movie in excellent quality.",
    publishedTime: "2024-12-20T07:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Harikatha", href: `${blogPostURLS.HARIKATHA_RELATIVE}` },
      { tag: "iBOMMA", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Harikatha iBOMMA", href: `${blogPostURLS.HARIKATHA_RELATIVE}` },
      { tag: "Harikatha review", href: `${blogPostURLS.HARIKATHA_RELATIVE}` },
    ],
    featuredImage: harikathaPoster,
    featuredImageAltText: "HariKatha-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/HariKatha_poster.jpg'`,
  },

  JIGRA: {
    absoluteURL: blogPostURLS.JIGRA_ABSOLUTE,
    relativeURL: blogPostURLS.JIGRA_RELATIVE,
    title: "Jigra Telugu Movie - iBOMMA.",
    description:
      "iBOMMA, watch the newly released Jigra Telugu movie 2024 in iBOMMA and also check out the latest reviews and updates, watch the trailers, read reviews, or even enjoy the movie in excellent quality.",
    publishedTime: "2024-12-21T07:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Jigra", href: `${blogPostURLS.JIGRA_RELATIVE}` },
      { tag: "iBOMMA", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Jigra iBOMMA", href: `${blogPostURLS.JIGRA_RELATIVE}` },
      { tag: "Jigra review", href: `${blogPostURLS.JIGRA_RELATIVE}` },
    ],
    featuredImage: jigraPoster,
    featuredImageAltText: "Jigra-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/jigra-poster-2024.jpg'`,
  },

  MECHANIC_ROCKY: {
    absoluteURL: blogPostURLS.MECHANIC_ROCKY_ABSOLUTE,
    relativeURL: blogPostURLS.MECHANIC_ROCKY_RELATIVE,
    title: "Mechanic Rocky Telugu Movie - iBOMMA.",
    description:
      "iBOMMA, watch the newly released Mechanic Rocky Telugu movie 2024 in iBOMMA and also check out the latest reviews and updates, watch the trailers, read reviews, or even enjoy the movie in excellent quality.",
    publishedTime: "2024-12-21T07:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Mechanic Rocky", href: `${blogPostURLS.MECHANIC_ROCKY_RELATIVE}` },
      { tag: "iBOMMA", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Mechanic Rocky iBOMMA", href: `${blogPostURLS.MECHANIC_ROCKY_RELATIVE}` },
      { tag: "Mechanic Rocky review", href: `${blogPostURLS.MECHANIC_ROCKY_RELATIVE}` },
    ],
    featuredImage: mechanicRockyPoster,
    featuredImageAltText: "Mechanic-rocky-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/mechanic-rocky-poster.jpg`,
  },

  MUFASA: {
    absoluteURL: blogPostURLS.MUFASA_ABSOLUTE,
    relativeURL: blogPostURLS.MUFASA_RELATIVE,
    title: "Mufasa-The Lion King Telugu Movie - iBOMMA.",
    description:
      "iBOMMA, The new movie Mufasa: The Lion King has been released in theaters today. It's a story about Mufasa before The Lion King movie we know. Fans are excited to see how it compares to the original!",
    publishedTime: "2024-12-21T07:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Mufasa, The Lion King", href: `${blogPostURLS.MUFASA_RELATIVE}` },
      { tag: "iBOMMA", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Mufasa The Lion King iBOMMA", href: `${blogPostURLS.MUFASA_RELATIVE}` },
      { tag: "Mufasa The Lion King", href: `${blogPostURLS.MECHANIC_ROCKY_RELATIVE}` },
    ],
    featuredImage: mufasaPoster,
    featuredImageAltText: "Mufasa-The-Lion-King-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/mufasa-telugu-poster.jpg`,
  },

  POTTEL: {
    absoluteURL: blogPostURLS.POTTEL_ABSOLUTE,
    relativeURL: blogPostURLS.POTTEL_RELATIVE,
    title: "Pottel Telugu Movie - iBOMMA.",
    description:
      "iBOMMA, watch the newly released Pottel Telugu movie 2024 in iBOMMA and also check out the latest reviews and updates, watch the trailers, read reviews, or even enjoy the movie in excellent quality.",
    publishedTime: "2024-12-21T07:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Pottel", href: `${blogPostURLS.POTTEL_RELATIVE}` },
      { tag: "iBOMMA", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Pottel iBOMMA", href: `${blogPostURLS.POTTEL_RELATIVE}` },
      { tag: "Pottel", href: `${blogPostURLS.POTTEL_RELATIVE}` },
    ],
    featuredImage: pottelPoster,
    featuredImageAltText: "pottel-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/pottel-poster.jpg`,
  },

  LEELA_VINODHAM: {
    absoluteURL: blogPostURLS.LEELA_VINODHAM_ABSOLUTE,
    relativeURL: blogPostURLS.LEELA_VINODHAM_RELATIVE,
    title: "Pottel Telugu Movie - iBOMMA.",
    description:
      "iBOMMA, watch the newly released Leela Vinodham Telugu movie 2024 in iBOMMA and also check out the latest reviews and updates, watch the trailers, read reviews, or even enjoy the movie in excellent quality.",
    publishedTime: "2024-12-21T16:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Leela Vinodham", href: `${blogPostURLS.LEELA_VINODHAM_RELATIVE}` },
      { tag: "iBOMMA", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Leela Vinodham iBOMMA", href: `${blogPostURLS.LEELA_VINODHAM_RELATIVE}` },
      { tag: "Leela Vinodham", href: `${blogPostURLS.LEELA_VINODHAM_RELATIVE}` },
    ],
    featuredImage: leelaVinodhamPoster,
    featuredImageAltText: "leela-vinodham-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/leela-vinodham-poster.jpg`,
  },

  ZEBRA: {
    absoluteURL: blogPostURLS.ZEBRA_ABSOLUTE,
    relativeURL: blogPostURLS.ZEBRA_RELATIVE,
    title: "Zebra Telugu Moive - iBOMMA.",
    description:
      "iBOMMA, watch the newly released Zebra Telugu movie 2024 in iBOMMA and also check out the latest reviews and updates, watch the trailers, read reviews, or even enjoy the movie in excellent quality.",
    publishedTime: "2024-12-21T16:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Zebra", href: `${blogPostURLS.ZEBRA_RELATIVE}` },
      { tag: "iBOMMA", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Zebra iBOMMA", href: `${blogPostURLS.ZEBRA_RELATIVE}` },
      { tag: "Zebra", href: `${blogPostURLS.ZEBRA_RELATIVE}` },
    ],
    featuredImage: zebraPoster,
    featuredImageAltText: "zebra-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/zebra-poster.png`,
  },
  SIR: {
    absoluteURL: blogPostURLS.SIR_ABSOLUTE,
    relativeURL: blogPostURLS.SIR_RELATIVE,
    title: "SIR(2024) Telugu Moive - iBOMMA.",
    description:
      "iBOMMA, watch the newly released SIR 2024 Telugu movie 2024 in iBOMMA and also check out the latest reviews and updates, watch the trailers, read reviews, or even enjoy the movie in excellent quality.",
    publishedTime: "2024-12-22T06:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "SIR", href: `${blogPostURLS.SIR_RELATIVE}` },
      { tag: "iBOMMA", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "SIR 2024 iBOMMA", href: `${blogPostURLS.SIR_RELATIVE}` },
      { tag: "SIR 2024", href: `${blogPostURLS.SIR_RELATIVE}` },
    ],
    featuredImage: sirPoster,
    featuredImageAltText: "sir-2024-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/Sir_(2024_film)_poster.jpg`,
  },
  BACHHALA_MALLI: {
    absoluteURL: blogPostURLS.BACHHALA_MALLI_ABSOLUTE,
    relativeURL: blogPostURLS.BACHHALA_MALLI_RELATIVE,
    title: "Bachhala Malli Telugu Movie - iBOMMA",
    description:
      "iBOMMA, watch the newly released Bachhala Malli Telugu movie 2024 in iBOMMA and also check out the latest reviews and updates, watch the trailers, read reviews, or even enjoy the movie in excellent quality.",
    publishedTime: "2024-12-22T06:37:55 IST",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "SIR", href: `${blogPostURLS.BACHHALA_MALLI_RELATIVE}` },
      { tag: "iBOMMA", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Bachhala Malli Movie iBOMMA", href: `${blogPostURLS.BACHHALA_MALLI_RELATIVE}` },
      { tag: "Bachhala Malli 2024 review", href: `${blogPostURLS.BACHHALA_MALLI_RELATIVE}` },
    ],
    featuredImage: bachhalaMalliPoster,
    featuredImageAltText: "bachhala-malli-poster",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/bachalamalli-poster.jpg`,
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
    url: `${blogPostURLS.THANGALAAN_RELATIVE}`,
    title: `${SEO_OBJ.THANGALAAN.title}`,
    description: `${SEO_OBJ.THANGALAAN.description}`,
    lastUpdateTime: `${SEO_OBJ.THANGALAAN.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.THANGALAAN.publishedTime}`,
    tags: SEO_OBJ.THANGALAAN.tags!,
    featuredImage: SEO_OBJ.THANGALAAN.featuredImage,
    featuredImageAltText: `${SEO_OBJ.THANGALAAN.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.THANGALAAN.ogImageURL}`,
  },
  {
    id: 3,
    url: `${blogPostURLS.LUCKY_BASKHAR_RELATIVE}`,
    title: `${SEO_OBJ.LUCKY_BASKHAR.title}`,
    description: `${SEO_OBJ.LUCKY_BASKHAR.description}`,
    lastUpdateTime: `${SEO_OBJ.LUCKY_BASKHAR.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.LUCKY_BASKHAR.publishedTime}`,
    tags: SEO_OBJ.LUCKY_BASKHAR.tags!,
    featuredImage: SEO_OBJ.LUCKY_BASKHAR.featuredImage,
    featuredImageAltText: `${SEO_OBJ.LUCKY_BASKHAR.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.LUCKY_BASKHAR.ogImageURL}`,
  },
  {
    id: 4,
    url: `${blogPostURLS.KANGUVA_RELATIVE}`,
    title: `${SEO_OBJ.KANGUVA.title}`,
    description: `${SEO_OBJ.KANGUVA.description}`,
    lastUpdateTime: `${SEO_OBJ.KANGUVA.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.KANGUVA.publishedTime}`,
    tags: SEO_OBJ.KANGUVA.tags!,
    featuredImage: SEO_OBJ.KANGUVA.featuredImage,
    featuredImageAltText: `${SEO_OBJ.KANGUVA.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.KANGUVA.ogImageURL}`,
  },
  {
    id: 5,
    url: `${blogPostURLS.KA_RELATIVE}`,
    title: `${SEO_OBJ.KA.title}`,
    description: `${SEO_OBJ.KA.description}`,
    lastUpdateTime: `${SEO_OBJ.KA.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.KA.publishedTime}`,
    tags: SEO_OBJ.KA.tags!,
    featuredImage: SEO_OBJ.KA.featuredImage,
    featuredImageAltText: `${SEO_OBJ.KA.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.KA.ogImageURL}`,
  },
  {
    id: 6,
    url: `${blogPostURLS.HARIKATHA_RELATIVE}`,
    title: `${SEO_OBJ.HARIKATHA.title}`,
    description: `${SEO_OBJ.HARIKATHA.description}`,
    lastUpdateTime: `${SEO_OBJ.HARIKATHA.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.HARIKATHA.publishedTime}`,
    tags: SEO_OBJ.HARIKATHA.tags!,
    featuredImage: SEO_OBJ.HARIKATHA.featuredImage,
    featuredImageAltText: `${SEO_OBJ.HARIKATHA.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.HARIKATHA.ogImageURL}`,
  },
  {
    id: 7,
    url: `${blogPostURLS.JIGRA_RELATIVE}`,
    title: `${SEO_OBJ.JIGRA.title}`,
    description: `${SEO_OBJ.JIGRA.description}`,
    lastUpdateTime: `${SEO_OBJ.JIGRA.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.JIGRA.publishedTime}`,
    tags: SEO_OBJ.JIGRA.tags!,
    featuredImage: SEO_OBJ.JIGRA.featuredImage,
    featuredImageAltText: `${SEO_OBJ.JIGRA.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.JIGRA.ogImageURL}`,
  },
  {
    id: 8,
    url: `${blogPostURLS.MECHANIC_ROCKY_RELATIVE}`,
    title: `${SEO_OBJ.MECHANIC_ROCKY.title}`,
    description: `${SEO_OBJ.MECHANIC_ROCKY.description}`,
    lastUpdateTime: `${SEO_OBJ.MECHANIC_ROCKY.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.MECHANIC_ROCKY.publishedTime}`,
    tags: SEO_OBJ.MECHANIC_ROCKY.tags!,
    featuredImage: SEO_OBJ.MECHANIC_ROCKY.featuredImage,
    featuredImageAltText: `${SEO_OBJ.MECHANIC_ROCKY.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.MECHANIC_ROCKY.ogImageURL}`,
  },
  {
    id: 9,
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
    id: 9,
    url: `${blogPostURLS.POTTEL_RELATIVE}`,
    title: `${SEO_OBJ.POTTEL.title}`,
    description: `${SEO_OBJ.POTTEL.description}`,
    lastUpdateTime: `${SEO_OBJ.POTTEL.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.POTTEL.publishedTime}`,
    tags: SEO_OBJ.POTTEL.tags!,
    featuredImage: SEO_OBJ.POTTEL.featuredImage,
    featuredImageAltText: `${SEO_OBJ.POTTEL.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.POTTEL.ogImageURL}`,
  },
  {
    id: 10,
    url: `${blogPostURLS.LEELA_VINODHAM_RELATIVE}`,
    title: `${SEO_OBJ.LEELA_VINODHAM.title}`,
    description: `${SEO_OBJ.LEELA_VINODHAM.description}`,
    lastUpdateTime: `${SEO_OBJ.LEELA_VINODHAM.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.LEELA_VINODHAM.publishedTime}`,
    tags: SEO_OBJ.LEELA_VINODHAM.tags!,
    featuredImage: SEO_OBJ.LEELA_VINODHAM.featuredImage,
    featuredImageAltText: `${SEO_OBJ.LEELA_VINODHAM.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.LEELA_VINODHAM.ogImageURL}`,
  },
  {
    id: 11,
    url: `${blogPostURLS.ZEBRA_RELATIVE}`,
    title: `${SEO_OBJ.ZEBRA.title}`,
    description: `${SEO_OBJ.ZEBRA.description}`,
    lastUpdateTime: `${SEO_OBJ.ZEBRA.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.ZEBRA.publishedTime}`,
    tags: SEO_OBJ.ZEBRA.tags!,
    featuredImage: SEO_OBJ.ZEBRA.featuredImage,
    featuredImageAltText: `${SEO_OBJ.ZEBRA.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.ZEBRA.ogImageURL}`,
  },
  {
    id: 12,
    url: `${blogPostURLS.SIR_RELATIVE}`,
    title: `${SEO_OBJ.SIR.title}`,
    description: `${SEO_OBJ.SIR.description}`,
    lastUpdateTime: `${SEO_OBJ.SIR.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.SIR.publishedTime}`,
    tags: SEO_OBJ.SIR.tags!,
    featuredImage: SEO_OBJ.SIR.featuredImage,
    featuredImageAltText: `${SEO_OBJ.SIR.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.SIR.ogImageURL}`,
  },
  {
    id: 13,
    url: `${blogPostURLS.BACHHALA_MALLI_RELATIVE}`,
    title: `${SEO_OBJ.BACHHALA_MALLI.title}`,
    description: `${SEO_OBJ.BACHHALA_MALLI.description}`,
    lastUpdateTime: `${SEO_OBJ.BACHHALA_MALLI.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.BACHHALA_MALLI.publishedTime}`,
    tags: SEO_OBJ.BACHHALA_MALLI.tags!,
    featuredImage: SEO_OBJ.BACHHALA_MALLI.featuredImage,
    featuredImageAltText: `${SEO_OBJ.BACHHALA_MALLI.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.BACHHALA_MALLI.ogImageURL}`,
  },
];
