module.exports = {
  title: 'CordX Documentation',
  tagline: 'Find out what I actually believe.',
  url: 'https://docs.cordx.wtf',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'destinypositions', // Usually your GitHub org/user name.
  projectName: 'destinypositions', // Usually your repo name.
  customFields: {
    metaDescription: 'Steven (Destiny) Bonnell II is a professional streamer, primarily playing games, but will often venture off into other topics, including but not limited to: philosophy, youtube videos, music and all sorts of wonderful pseudo-intellectualism.',
  },
  themeConfig: {
    // Vanilla settings
    navbar: {
      title: 'My Positions',
      logo: {
        alt: 'Destiny',
        src: 'img/favicon.ico',
      },
      items: [
        {
          to: 'docs/',
          activeBaseRegex: 'docs/$',
          label: 'About',
          position: 'left',
        },
        {
          to: 'docs/current_events',
          activeBasePath: 'docs/current_events',
          label: 'Current Events',
          position: 'left',
        },
        {
          to: 'docs/politics',
          activeBasePath: 'docs/politics',
          label: 'Politics',
          position: 'left',
        },
        {
          to: 'docs/philosophy',
          activeBasePath: 'docs/philosophy',
          label: 'Philosophy',
          position: 'left',
        },
       {
          to: 'docs/notable_critics',
          activeBasePath: 'docs/notable_critics',
          label: 'Notable Critics',
          position: 'left',
        },
        {
          to: 'docs/personal',
          activeBasePath: 'docs/personal',
          label: 'Personal',
          position: 'left',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Main Website',
              href: 'https://cordx.wtf',
            },
            {
              label: 'Upload Server',
              href: 'https://cdn.cordx.wtf',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://cordx.wtf/discord',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/Chill-Bot-Dev/CordX',
            },
          ],
        },
      ],
      style: 'dark',
    },

    // Extra settings
    colorMode: {
      defaultMode: 'dark',
    },
    image: 'https://cdn.cordx.wtf/A1EF58E2-BC7E-44F6-8F9B-E2C7CA53D2E2.png',
    metadatas: [
      {name: 'twitter:card', content: 'summary'},
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src: 'https://kit.fontawesome.com/1932a73877.js',
      crossorigin: 'anonymous',
    },
  ],
};
