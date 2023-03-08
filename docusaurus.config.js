// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sidekick',
  tagline: 'Like Chrome DevTools, for your backend',
  url: 'https://docs.runsidekick.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'thundra', // Usually your GitHub org/user name.
  projectName: 'sidekick', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
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
      navbar: {
        title: 'Sidekick',
        logo: {
          alt: ' ',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://app.runsidekick.com/signup',
            label: 'Get Started',
            position: 'right',
            className: 'navbar-get-started',
          },
          {
            href: 'https://docs.runsidekick.com/contributors-circle/',
            label: 'Contributors Circle',
            position: 'left',
          },
          {
            href: 'https://runsidekick.com/pricing',
            label: 'Pricing',
            position: 'left',
          },
          {
            href: 'https://discord.gg/bCtCmzP2ge',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Thundra, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    

    plugins: [
       './plugins/tailwind-config.js',
       './plugins/gtm.js',
       require.resolve("@cmfcmf/docusaurus-search-local")
     ], 
    
};

module.exports = config;
