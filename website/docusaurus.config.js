// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cloud Adoption Framework for Terraform landing zones',
  tagline: 'Everything-As-Code. CloudMech\'s guidance for Azure workloads.',
  url: 'https://caf.azure.cloudmech.com.au',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/landingzones.ico',
  organizationName: 'CloudMech AU Pty Ltd', // Usually your GitHub org/user name.
  projectName: 'Enterprise Azure Landing Zone Deployment', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/CloudMechAU/caf-doco/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/CloudMechAU/caf-doco/tree/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-GCM5PJNDCN',
          anonymizeIP: true,
        },
        googleAnalytics: {
          trackingID: 'G-GCM5PJNDCN',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CloudMech\'s Azure Cloud Adoption Framework',
        logo: {
          alt: 'Cloud Adoption Framework for Terraform Landing zones.',
          src: 'img/logo_landingzone.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: 'fundamentals/lz-intro',
            position: 'left',
            label: 'Fundamentals',
          },
          {
            type: 'doc',
            docId: 'module/module-intro',
            position: 'left',
            label: 'Module',
          },
          {
            type: 'doc',
            docId: 'rover/rover-intro',
            position: 'left',
            label: 'Rover',
          },
          {
            type: 'doc',
            docId: 'provider/provider-intro',
            position: 'left',
            label: 'Provider',
          },
          {
            type: 'doc',
            docId: 'azure-landing-zones/landingzones/alz-intro',
            position: 'left',
            label: 'Azure Landing Zones',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/CloudMechAU/caf-doco',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'CloudMech | IT Consultancy',
                href: 'https://www.cloudmech.com.au',
              },
              {
                label: 'Gitter',
                href: 'https://gitter.im/aztfmod/community',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/azure/caf-terraform-landingzones',
              },
            ],
          },
        ],
        copyright: `Copyright CloudMech AU Pty Ltd © ${new Date().getFullYear()} Cloud Adoption Framework for Terraform Landing zones.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    })
};

module.exports = config;
