import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>notes</span>,
  project: {
    link: "https://github.com/dejmedus/notes",
  },
  docsRepositoryBase: "https://github.com/dejmedus/notes",
  footer: {
    text: "notes",
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
