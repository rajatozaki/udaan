import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as cn } from "./router-Cf5W4ztT.mjs";
import { t as Reveal } from "./reveal-D38yxK3Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-heading-l5wJ2RA-.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, lede, onDark = false, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: cn("max-w-3xl", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("font-display text-title", onDark ? "text-fg" : "text-ink-fg"),
				children: title
			}),
			lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-4 max-w-2xl text-lede", onDark ? "text-fg-muted" : "text-ink-muted"),
				children: lede
			}) : null
		]
	});
}
//#endregion
export { SectionHeading as t };
