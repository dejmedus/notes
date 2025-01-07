import { useRouter } from "next/router";
import { useConfig, DocsThemeConfig } from "nextra-theme-docs";

import { seasonIcon } from "./components/SeasonIcons";

const config: DocsThemeConfig = {
  logo: <span></span>,
  project: {
    link: "https://github.com/dejmedus/notes",
  },
  docsRepositoryBase: "https://github.com/dejmedus/notes/blob/main",
  footer: {
    component: <span></span>,
  },
  feedback: {
    content: "",
  },
  editLink: {
    content: "View on GitHub",
  },
  sidebar: { defaultMenuCollapseLevel: 1 },
  head() {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    const url = "https://notes.juliab.dev" + `/${asPath}`;

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Notes"} />

        <meta
          property="og:description"
          content={
            frontMatter.description || "References, resources, and notes "
          }
        />
        <title>{frontMatter.title || "Notes"}</title>
      </>
    );
  },

  faviconGlyph: seasonIcon,
};

export default config;
