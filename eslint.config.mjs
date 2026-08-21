import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  {
    rules: {
      // Long-form editorial JSX intentionally uses typographic prose. These
      // characters are safely escaped by React at render time.
      "react/no-unescaped-entities": "off",
      // Existing client providers initialise browser-derived state on mount.
      "react-hooks/set-state-in-effect": "off",
      // Hash navigation is intentionally expressed as plain anchors so it
      // works before hydration and with the smooth-scroll provider.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "assets/**",
    "_legacy/**",
    ".claude/**",
    "next-env.d.ts",
  ]),
]);
