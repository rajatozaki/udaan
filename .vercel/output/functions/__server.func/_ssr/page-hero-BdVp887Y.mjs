import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-BdVp887Y.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, lede, image, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid overflow-hidden border-b border-line-paper bg-paper md:grid-cols-2 md:min-h-[32rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative min-h-[240px] overflow-hidden bg-ink sm:min-h-[300px] md:min-h-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "hero-media absolute inset-0 size-full object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hero-enter flex flex-col justify-end px-5 pb-8 pt-24 sm:px-8 md:px-10 md:pb-12 md:pt-28 lg:px-14",
			children: [
				eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4",
					children: eyebrow
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-xl font-display text-title text-ink-fg",
					children: title
				}),
				lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-lede text-ink-muted",
					children: lede
				}) : null,
				children
			]
		})]
	});
}
//#endregion
export { PageHero as t };
