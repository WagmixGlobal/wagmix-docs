const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Wagmix Global",
  tagline: "Discover the Future of Finance with Wagmix: Your Gateway to Knowledge and Innovation",
  url: "https://docs.wagmix.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "wagmix-global", // Usually your GitHub org/user name.
  projectName: "wagmix-docs", // Usually your repo name.
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // TODO: need to update his link after we make this repo public accessible
          editUrl: "https://github.com/WagmixGlobal/wagmix-docs/tree/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Wagmix Global",
        logo: {
          alt: "Wagmix Global Logo",
          src: "img/logo.png",
        },
        items: [
          { to: "docs/documentation-overview", label: "Documentation", position: "left" },
          { to: "/docs/wagmix-exchange/Getting%20Started", label: "Exchange", position: "left" },
          { to: "/docs/wagmix-coin/Token%20Overview", label: "Coin", position: "left" },
          { to: "/docs/api/Getting%20Started", label: "API Docs", position: "right" },
          { to: "/docs/user-guide/Welcome", label: "User Guide", position: "right" },
          {
            href: "https://support.wagmix.io/category/announcements",
            label: "Blog",
            position: "right",
          },
          {
            href: "https://github.com/WagmixGlobal",
            position: "right",
            className: "header-github-link",
            "aria-label": "Wagmix GitHub",
          },
        ],
      },
      footer: {
        // style: "dark",
        links: [
          {
            title: "Product",
            items: [
              {
                label: "Launch Wagmix",
                to: "https://wagmix.io",
              },
              {
                label: "Wagmix Coin",
                to: "https://coin.wagmix.io",
              },
              // NOTE: these 2 links are broken. Wait for update from marketing team
              // { label: "Leaderboard", to: "https://perpetual.io/leaderboard" },
              // { label: "Analytics", to: "https://perpetual.io/analytics" },
            ],
          },
          {
            title: "Corporate",
            items: [
              { label: "Announcements", to: "https://support.wagmix.io/category/announcements" },
              { label: "About", to: "https://wagmix.io/about" },
              { label: "Press", to: "https://wagmix.io/press" },
              { label: "Careers", to: "https://wagmix.io/careers" },
              { label: "Legal", to: "https://wagmix.io/internal/legal" },
              { label: "Terms", to: "https://wagmix.io/internal/terms" },
              { label: "Privacy", to: "https://wagmix.io/internal/privacy-notice" },
              { label: "Risk Warning", to: "https://wagmix.io/internal/risk-warning" },
              { label: "Business Contacts", to: "https://wagmix.io/about#contact" },
              { label: "Notices", to: "https://support.wagmix.io/notices" },
              { label: "Community", to: "https://wagmix.io/community" },
              { label: "Knowledge", to: "https://support.wagmix.io/knowledge" },
              { label: "Building Trust", to: "https://wagmix.io/building-trust" },
              { label: "Cookie Privacy", to: "https://wagmix.io/internal/cookie-privacy" },
            ],
          },
          {
            title: "Products & Service",
            items: [
              { label: "Wagmix Coin", to: "https://coin.wagmix.io/" },
              { label: "Support Center", to: "https://support.wagmix.io/" },
              { label: "Developers", to: "https://wagmix.io/developers" },
              { label: "Governance", to: "https://wagmix.io/governance" },
              { label: "Brand", to: "https://wagmix.io/branding" },
              { label: "Privacy Notice", to: "https://wagmix.io/internal/privacy-notice" },
              { label: "Coin Listing Plan", to: "https://support.wagmix.io/article/wagmix-coin-listing-plan" },
              { label: "Referral", to: "https://wagmix.io/referral" },
              { label: "Affiliate", to: "https://wagmix.io/affiliate" },
              { label: "Listing Application", to: "https://support.wagmix.io/guest/openticket" },
            ],
          },
          {
            title: "Social Media",
            items: [
              { label: "X (Twitter)", to: "https://twitter.com/WagmixGlobal", img: "twitterIcon" },
              { label: "Telegram Channel", to: "https://t.me/WagmixGlobal", img: "telegramIcon" },
              { label: "Telegram Community", to: "https://t.me/WagmixExchange", img: "telegramIcon" },
              { label: "Telegram Exchagange", to: "https://t.me/WagmixExchange", img: "telegramIcon" },
              { label: "Medium", to: "https://wagmix.medium.com/", img: "mediumIcon" },
            ],
          },
        ],
        copyright: `All rights reserved. © ${new Date().getFullYear()} Wagmix Global`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity"],
      },
      algolia: {
        apiKey: "9f3501510e023882845791911e5c113a",
        indexName: "wagmix-docs",
        appId: "3TBGQBHK03",
        contextualSearch: false,
      },
    }),
}
