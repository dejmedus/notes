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
        titleTemplate: "%s – notes",
      };
    }
  },
};

export default config;
