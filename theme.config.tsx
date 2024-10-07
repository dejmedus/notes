import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

const seasons = {
  0: "💫🎊🎉", // January
  1: "💌💖🎀", // February
  2: "🌱🌼🐝", // March
  3: "🌸🐣🍬", // April
  4: "🌱🌸🐝", // May
  5: "☀️🌻🌈", // June
  6: "🌳🏕🍉", // July
  7: "☀️🌽🌾", // August
  8: "🍁🍂🌰", // September
  9: "🍂🦃🎃", // October
  10: "⛄🌨🛷", // November
  11: "❄️🎄⛄", // December
};
const season = new Date().getMonth();
const config: DocsThemeConfig = {
  logo: <span>notes</span>,
  project: {
    link: "https://github.com/dejmedus/notes",
  },
  docsRepositoryBase: "https://github.com/dejmedus/notes/blob/main",
  footer: {
    text: seasons[season],
  },
  feedback: {
    content: "Feedback →",
  },
  editLink: {
    text: "View on GitHub",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s",
      };
    }
  },
  // sidebar: { defaultMenuCollapseLevel: 1 },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:url" content="https://notes.juliab.dev" />
      <meta property="og:title" content="Notes" />
      <meta
        property="og:description"
        content="Guides, references, resources, and notes collected while learning web development"
      />
      <link rel="icon" type="image/x-icon" href="./assets/flower.png"></link>
    </>
  ),
  faviconGlyph: "✨",
};

export default config;
