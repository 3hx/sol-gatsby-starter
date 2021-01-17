import WebFont from "webfontloader";
import "./src/assets/css/tailwind.css";

export { wrapRootElement } from "./gatsby-ssr";

WebFont.load({
  google: {
    families: ["Roboto", "Inter", "sans-serif"],
  },
});
