import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as INDUSTRIES } from "./router-Cf5W4ztT.mjs";
import { t as Reveal } from "./reveal-D38yxK3Z.mjs";
import { n as ImageRail, t as CtaBand } from "./image-rail-u60umBUS.mjs";
import { t as PageHero } from "./page-hero-BdVp887Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-BQMgkkQl.js
var import_jsx_runtime = require_jsx_runtime();
function IndustriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Industries",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Packaging solutions",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"for every line."
			] }),
			lede: "FMCG, food, dairy, textile, e-commerce, pharma and industrial — each with a different compression, hygiene and print brief.",
			image: "/images/gallery-print.jpg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageRail, {
			images: INDUSTRIES.map((ind) => ({
				src: ind.image,
				alt: ind.name
			})),
			className: "bg-ink"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "site-wrap-wide grid gap-3 sm:grid-cols-2",
				children: INDUSTRIES.map((ind, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 40,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						id: ind.slug,
						className: "group relative block overflow-hidden scroll-mt-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "img-zoom",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: ind.image,
									alt: "",
									className: "aspect-[16/11] w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-5 text-fg md:p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: String(i + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 font-display text-3xl",
										children: ind.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-md text-sm leading-relaxed text-fg-muted",
										children: ind.copy
									})
								]
							})
						]
					})
				}, ind.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "A new category? Send the brief." })
	] });
}
//#endregion
export { IndustriesPage as component };
