// See https://observablehq.com/framework/config for documentation.
import {version as FRAMEWORK_VERSION} from "@observablehq/framework/package.json";

const timestamp = [
  new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "short"
  }),
  "PT" // pacific time zone
].join(" ")
const date = timestamp.split(",")[1]
const FOOTER_OBSERVABLE = `
<p>Deployed on <a title="${timestamp}, Framework v${FRAMEWORK_VERSION}">${date}</a></p>`;

export default {
  title: " Cook w/ Code Restaurant",
  pages: [
    {
      name: "Framework demo",
      open: false,
      pages: [
        {name: "Index", path: "demo/index"},
        {name: "Dashboard", path: "demo/example-dashboard"},
        {name: "Report", path: "demo/example-report"},
      ]
    },
  ],
  theme: ["light", "alt"],
  search: true,
  toc: true, // whether to show the table of contents
  pager: true, // whether to show previous & next links in the footer
  root: "docs", // path to the source root for preview
  output: "dist", // path to the output root for build
  // what to show in the header (HTML)
  header: `
  <div style="display: flex; align-items: center; gap: 0.5rem; height: 2.2rem; margin: -1.5rem -2rem 2rem -2rem; padding: 0.5rem 2rem; border-bottom: solid 1px var(--theme-foreground-faintest); font: 500 16px var(--sans-serif);">
    <span style="display: flex; align-items: center;">
      <svg width="22" height="22" viewBox="124.12300109863281 106.0770034790039 775.8770141601562, 787.845947265625" fill=var(--theme-foreground)>
        <path d="M900,500L806.418,757.115L569.459,893.923L300,846.41L124.123,636.808L124.123,363.192L300,153.59L569.459,106.077L806.418,242.885L900,500ZM333.333,500L372.326,607.131L471.059,664.135L583.333,644.338L656.615,557.003L656.615,442.997L583.333,355.662L471.059,335.865L372.326,392.869L333.333,500Z"/>
      </svg>
    </span>
    <div style="display: flex; flex-grow: 1; justify-content: space-between; align-items: baseline;">
      <a href="https://cookwcode.observablehq.cloud/restaurant/" style="color: var(--theme-foreground);">Cook w/ Code Restaurant</a>
      <span style="display: flex; align-items: baseline; gap: 0.5rem; font-size: 14px;">
        <a target="_blank" href="https://github.com/cookwcode/restaurant" style="color: var(--theme-foreground);"><span>GitHub</span></a>
      </span>
    </div>
  </div>
  `,
  footer: FOOTER_OBSERVABLE, // what to show in the footer (HTML)
};
