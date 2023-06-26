import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Product',
      links: [
        {
          text: 'About',
          href: getPergmalink('/about/'),
        },
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'FAQ',
          href: getPermalink('/faq/'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing/'),
        },
      ],
    },
    {
      text: 'Learn',
      links: [
        {
          text: 'Documentation',
          href: 'https://blazed.dev/docs/quest/',
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Support',
      href: getPermalink('/support'),
    }
  ],
  actions: [
    { type: 'button', text: 'Open App', href: 'https://app.blazed.quest/' }
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'About', href: getPermalink('/about/') },
        { text: 'FAQ', href: getPermalink('/faq/') },
        { text: 'Pricing', href: getPermalink('/pricing/') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'App', href: 'https://app.blazed.quest/' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Blazed One', href: 'https://blz.one/' },
        { text: 'Community', href: 'https://blazed.city/' },
        { text: 'Systems', href: 'https://blazed.systems/' },
        { text: 'Telecom', href: 'https://blazed.tel/' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Get Support', href: getPermalink('/support/') },
        { text: 'Docs', href: 'https://blazed.dev/docs/quest/' },
        { text: 'Community Forum', href: 'https://www.facebook.com/groups/blazedforum' },
        { text: 'Developers', href: 'https://blazed.dev/' },
        { text: 'Status', href: 'https://blazed.statuspage.io/' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: 'https://blazedlabs.com/about' },
        { text: 'Blog', href: 'https://blazedlabs.com/blog' },
        { text: 'Corporate', href: 'https://blazed.company/' },
        { text: 'Invest', href: 'https://opencollective.com/blazed-dev' },
        { text: 'Contact', href: 'https://blazed.contact/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/BlazedLabs/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/blazed_labs/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/blazedlabs' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/blazed-labs' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://blazed.sirv.com/logo/Beaker-Cobalt.png?w=32&h=32)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://blazedlabs.com/"> Blazed Labs</a> · All rights reserved.
  `,
};
