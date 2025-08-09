import type { Config, ThemeUserConfig, IntegrationUserConfig } from "astro-pure/types";

export const theme: ThemeUserConfig = {
  title: "Rodney Hartman",
  author: "Rodney Hartman",
  description: "Personal site built with Astro and Pure theme",
  favicon: "/favicon.svg",
  locale: {
    lang: "en-US",
    attrs: "en_US",
    dateLocale: "en-US",
    dateOptions: { day: "numeric", month: "short", year: "numeric" },
  },
  header: {
    menu: [
      { title: "Blog", link: "/blog" },
      { title: "About", link: "/about" },
    ],
  },
  footer: {
    year: `© ${new Date().getFullYear()}`,
    links: [],
    credits: true,
    social: {},
  },
  content: {
    externalLinksContent: " ↗",
    blogPageSize: 8,
    externalLinkArrow: true,
    share: [],
  },
  titleDelimiter: "•",
  prerender: true,
  npmCDN: "https://cdn.jsdelivr.net/npm",
  head: [],
  customCss: [],
};

export const integ: IntegrationUserConfig = {
  links: { logbook: [], applyTip: [] },
  pagefind: false,
  quote: {
    server: "https://api.quotable.io/quotes/random?maxLength=60",
    target: `(data) => data[0].content || 'Error'`
  },
  typography: {
    class: "prose text-base text-muted-foreground",
    blockquoteStyle: "italic",
    inlineCodeBlockStyle: "modern",
  },
  mediumZoom: {
    enable: true,
    selector: ".prose .zoomable",
    options: { className: "zoomable" },
  },
  waline: { enable: false } as any,
};

const config: Config = { ...theme, integ };
export default config;
