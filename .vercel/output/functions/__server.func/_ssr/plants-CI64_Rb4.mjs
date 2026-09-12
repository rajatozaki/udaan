import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as EQUIPMENT, o as GALLERY, r as CERTS, u as PLANTS } from "./router-Cf5W4ztT.mjs";
import { t as Reveal } from "./reveal-D38yxK3Z.mjs";
import { n as ImageRail, t as CtaBand } from "./image-rail-u60umBUS.mjs";
import { t as PageHero } from "./page-hero-BdVp887Y.mjs";
import { t as SectionHeading } from "./section-heading-l5wJ2RA-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/plants-CI64_Rb4.js
var import_jsx_runtime = require_jsx_runtime();
function PlantsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Plants",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"State of the art,",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"fully automatic."
			] }),
			lede: "Two plants. Thirty thousand tonnes a year, expanding toward sixty. A laboratory on site. A fleet that does not wait on a vendor.",
			image: "/images/gallery-warehouse.jpg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageRail, {
			images: GALLERY,
			className: "bg-ink"
		}),
		PLANTS.map((plant, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: plant.id,
			className: `scroll-mt-24 py-12 md:py-16 ${i ? "bg-paper-2" : "bg-paper"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide grid items-start gap-10 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "image",
					className: "img-zoom md:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: plant.image,
						alt: "",
						className: "aspect-[16/10] w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: plant.region
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-title",
							children: plant.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-ink-muted",
							children: plant.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-8 divide-y divide-line-paper border-y border-line-paper",
							children: [
								["Serves", plant.serves],
								["Commissioned", plant.started],
								["Land", plant.area],
								["Installed", plant.capacity],
								plant.expanding ? ["Expansion", plant.expanding] : null
							].filter((row) => Boolean(row)).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[0.7rem] tracking-[0.16em] uppercase text-ink-muted",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-sm text-ink-fg",
									children: v
								})]
							}, k))
						})
					]
				})]
			})
		}, plant.id)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink py-12 text-fg md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide grid items-center gap-12 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					onDark: true,
					eyebrow: "The hall",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Corrugation and conversion", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " under one roof." })] }),
					lede: "Kraft paper in, finished packs out. Automatic lines keep caliper, flute and print where the specification put them."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "image",
					className: "img-zoom",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/gallery-corrugator.jpg",
						alt: "Automatic corrugator hall",
						className: "aspect-[16/10] w-full object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide grid items-center gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "image",
					className: "img-zoom md:order-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/real-lab.jpg",
						alt: "In-house quality laboratory",
						className: "aspect-[4/3] w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Laboratory",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Quality is a room,", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " not a poster." })] }),
						lede: "Every lot can be asked to prove itself — burst, compression, GSM, moisture, RCT and ECT — before it leaves the yard."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2",
						children: EQUIPMENT.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-t border-line-paper pt-3 text-sm",
							children: e
						}, e))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 flex flex-wrap gap-x-8 gap-y-4",
						children: CERTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: c.code
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-ink-muted",
							children: c.name
						})] }, c.code))
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/gallery-dock.jpg",
					alt: "",
					className: "hero-media absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/65" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "site-wrap-wide relative grid gap-8 py-14 text-fg md:grid-cols-2 md:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-5",
						children: "Logistics"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-title",
						children: ["Twenty-six trucks.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " Ours." })]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 80,
						className: "flex items-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lede text-fg-muted",
							children: "An in-house fleet runs finished goods from both plants into North, Central and West India. On-time is not a slogan when the keys are on the same ring as the plant."
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { PlantsPage as component };
