import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as GALLERY } from "./router-Cf5W4ztT.mjs";
import { t as Reveal } from "./reveal-D38yxK3Z.mjs";
import { n as ImageRail, t as CtaBand } from "./image-rail-u60umBUS.mjs";
import { t as PageHero } from "./page-hero-BdVp887Y.mjs";
import { t as SectionHeading } from "./section-heading-l5wJ2RA-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sustainability-CtTuo6tx.js
var import_jsx_runtime = require_jsx_runtime();
var PILLARS = [
	{
		n: "01",
		t: "100% recyclable",
		d: "Every corrugated product we manufacture is designed to re-enter the paper cycle. Plastic is not part of the brief."
	},
	{
		n: "02",
		t: "Less material, same strength",
		d: "Board grade and flute are engineered to the load — not padded ‘to be safe’. Protection without surplus fibre."
	},
	{
		n: "03",
		t: "Energy-aware production",
		d: "Automatic lines, in-house conversion and fewer wasted kilometres between plant and customer."
	},
	{
		n: "04",
		t: "Responsible fibre",
		d: "Kraft paper sourced with an eye on the mill, the grade and the job it has to do — then qualified on arrival."
	}
];
function SustainabilityPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Sustainability",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Paper-first.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"Always."
			] }),
			lede: "Corrugated that protects the goods and the ground they travel over — recyclable, specified, and made on plants we own.",
			image: "/images/gallery-rolls.jpg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageRail, {
			images: GALLERY.slice(0, 8),
			className: "bg-ink"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "overflow-hidden bg-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/gallery-sheets.jpg",
					alt: "Corrugated sheets",
					className: "aspect-[4/3] w-full object-cover md:min-h-[28rem]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/sustainability.jpg",
					alt: "Paper-first packaging",
					className: "aspect-[4/3] w-full object-cover md:min-h-[28rem]"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide grid gap-12 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "The stance",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["The pack should not", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " outlive the product." })] })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "md:col-span-7 space-y-5 text-lede text-ink-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Plastic packaging has a long afterlife. Corrugated does not have to. Udaan manufactures 100% recyclable boxes, sheets and rolls, keeps fibre use to the specification, and runs ISO 14001 environmental management across both plants." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sustainability here is not a campaign. It is the material, the machine, the kilometre and the lot — paper-first by design, ISO 14001 and GMP by system." })]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink py-12 text-fg md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "site-wrap-wide grid gap-px bg-line md:grid-cols-2",
				children: PILLARS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 50,
					className: "bg-ink p-8 md:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: p.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 font-display text-3xl",
							children: p.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm leading-relaxed text-fg-muted",
							children: p.d
						})
					]
				}, p.n))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide grid items-center gap-12 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "img-zoom",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/flute.jpg",
						alt: "Corrugated flute fibre",
						className: "aspect-[16/10] w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Circularity",
					title: "Fibre that can come back.",
					lede: "Corrugated is one of the most recovered packaging materials in the world. We design for that recovery — clean liners, honest grades, no decorative plastic that wrecks the bale."
				}) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: "Specify a greener pack without losing the stack." })
	] });
}
//#endregion
export { SustainabilityPage as component };
