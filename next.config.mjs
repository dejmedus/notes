import { readFileSync } from "fs";
import { createHighlighter, bundledThemes } from "shiki";
import nextra from "nextra";

const githubLight = await bundledThemes["github-light"]();
const githubDark = await bundledThemes["github-dark"]();

const potatoTokenColors = JSON.parse(
  readFileSync("./public/syntax/potato-dark.json", "utf8"),
).tokenColors;

const potatoLight = {
  ...githubLight.default,
  name: "potato-light",
  tokenColors: [...githubLight.default.tokenColors, ...potatoTokenColors],
};

const potatoDark = {
  ...githubDark.default,
  name: "potato-dark",
  tokenColors: [...githubDark.default.tokenColors, ...potatoTokenColors],
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  search: { codeblocks: true },
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: { light: potatoLight, dark: potatoDark },
      getHighlighter: async (options) => {
        return createHighlighter({
          ...options,
          langs: [
            ...(options.langs ?? []),
            {
              name: "potato",
              aliases: ["potato"],
              ...JSON.parse(
                readFileSync("./public/syntax/potato.tmLanguage.json", "utf8"),
              ),
            },
          ],
        });
      },
    },
  },
});

export default withNextra({
  reactStrictMode: true,
});
