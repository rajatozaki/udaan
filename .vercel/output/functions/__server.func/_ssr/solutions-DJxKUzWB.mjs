import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Button, f as PRODUCTS, n as useQuote, o as GALLERY, v as cn } from "./router-Cf5W4ztT.mjs";
import { t as Reveal } from "./reveal-D38yxK3Z.mjs";
import { n as ImageRail, t as CtaBand } from "./image-rail-u60umBUS.mjs";
import { t as PageHero } from "./page-hero-BdVp887Y.mjs";
import { t as SectionHeading } from "./section-heading-l5wJ2RA-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions-DJxKUzWB.js
var import_jsx_runtime = require_jsx_runtime();
function SolutionsPage() {
	const { setOpen } = useQuote();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Solutions",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Corrugated, considered",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"at scale."
			] }),
			lede: "Boxes, printed cartons, sheets, rolls and die-cut structures — specified to the product, the route and the line they run on.",
			image: "/images/gallery-sheets.jpg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageRail, {
			images: GALLERY.slice(0, 8),
			className: "bg-ink"
		}),
		PRODUCTS.map((product, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: product.slug,
			className: cn("scroll-mt-24 py-12 md:py-16", i % 2 ? "bg-paper-2" : "bg-paper"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("site-wrap-wide grid items-center gap-10 md:grid-cols-12", i % 2 && "md:[&>*:first-child]:order-2"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "image",
					className: "img-zoom md:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: "",
						className: "aspect-[4/3] w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-6 md:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: product.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-title",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lede text-ink-muted",
							children: product.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-ink-muted",
							children: product.details
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ink",
							className: "mt-8",
							onClick: () => setOpen(true),
							children: "Specify this pack"
						})
					]
				})]
			})
		}, product.slug)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink py-12 text-fg md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide grid gap-12 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					onDark: true,
					eyebrow: "Capability",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Short runs and long ones.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " Same discipline." })] }),
					lede: "Ten boxes or a shift of thousands — automatic machines, in-house print and a laboratory that does not wave lots through."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "grid gap-px bg-line sm:grid-cols-2",
					children: [
						["3-ply & 5-ply", "Board constructions matched to stacking height and climate."],
						["Print", "Single and multi-colour, on kraft and white-top liners."],
						["Die-cut", "Inserts, partitions, fitments — designed with the outer."],
						["Sheets & rolls", "For converters and packing halls that take board, not boxes."]
					].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-ink p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-fg-muted",
							children: d
						})]
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { SolutionsPage as component };
