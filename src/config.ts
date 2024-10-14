import type { Site } from "./types";
export const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const SITE: Site = {
  website: IS_PRODUCTION
    ? "https://astro-template-layout.pages.dev/" //同じ値をastro.config.mjsのsiteに設定
    : "http://localhost:4321/",
  base: "/",
  siteName: "Astro Template Layout",
  titleDefault: "Astro Template Layout",
  descriptionDefault: "A template of Astro Layout.",
  ogTypeDefault: "website",
  ogImageDefault: "/opengraph-image-1200x630.jpg",
  ogImageTypeDefault: "image/jpeg",
  ogImageAltDefault: "This is the site image.",
  lang: "ja",
  ogLocale: "ja_JP",
  xTwitterUsername: "@bolstatech",
};
