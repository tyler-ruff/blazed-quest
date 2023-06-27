import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'Quest',

  origin: 'https://blazed.quest',
  basePathname: '/',
  trailingSlash: false,

  title: 'Blazed Quest - Project management service and products from Blazed Labs LLC.',
  description:
    'Suitable for small to enterprise large business, and anywhere in between. The Blazed Quest solution helps you get it done.',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'EST',
  }),

  googleAnalyticsId: "G-VHF3XYR1WR", // or "G-XXXXXXXXXX",
  googleSiteVerificationId: false,

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
