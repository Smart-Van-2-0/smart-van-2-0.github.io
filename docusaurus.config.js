// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smart Van Project',
  tagline: 'Web site for the Smart Van project',
  favicon: 'img/logos/logo_32.ico',
  url: 'https://smartvan.johnosproject.org',
  baseUrl: '/',
  organizationName: 'johnosproject',
  projectName: 'smart-van-2-0.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/smart-van-2-0/smart-van-2-0.github.io/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logos/social_banner.jpg.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'SmartVan Logo',
          src: 'img/logos/logo_200.png',
        },
        items: [
          {
            label: 'Docs',
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
          },
          {
            label: 'Blog',
            to: '/blog',
            position: 'left'
          },
          {
            href: 'https://www.johnosproject.org',
            label: 'John OS',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'SmartVan @ JohnOSProject.org',
            items: [
              {
                label: 'Features',
                to: '/docs/features',
              },
              {
                label: 'Hardware',
                to: '/docs/hardware',
              },
              {
                label: 'Software',
                to: '/docs/software',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Other WebSites',
            items: [
              {
                label: 'John OS Project',
                href: 'https://www.johnosproject.org',
              },
              {
                label: 'RobyPomper.org',
                href: 'https://www.robypomper.org',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=100095337571720',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/smart-van-2-0',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Roberto Pompermaier`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

module.exports = config;
