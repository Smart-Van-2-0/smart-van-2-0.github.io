// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');
import {themes as prismThemes} from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smart Van Project',
  tagline: 'Web site for the Smart Van project',
  favicon: 'img/logos/logo_32.ico',
  url: 'https://www.smartvanbox.org',
  baseUrl: '/',
  organizationName: 'SmartVan',
  projectName: 'smart-van-2-0.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
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
        gtag: {
          trackingID: 'G-HSBHLDVTYK',
          anonymizeIP: true,
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logos/social_banner.jpg',
      announcementBar: {
        id: 'updating',
        content:
          'Hi, this project is under heavily development, so come back often to check for new updates!',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'SmartVan Logo',
          src: 'img/logos/logo_256.png',
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
            title: 'SmartVan',
            items: [
              {
                label: 'Specifications',
                to: '/docs/specs',
              },
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
                href: 'https://www.smartvanbox.org',
              },
              {
                label: 'RobyPomper.org',
                href: 'https://www.robypomper.org',
              },
            ],
          },
          {
            title: 'eMail & Social',
            items: [
              {
                label: 'collaborate@smartvanbox.org',
                href: 'mailto:collaborate@smartvanbox.org',
              },
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
        copyright: `Copyright © ${new Date().getFullYear()} Roberto Pompermaier | 1.0.0 `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
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
