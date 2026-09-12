import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as LEADERSHIP, g as TIMELINE, h as STRENGTHS, o as GALLERY } from "./router-Cf5W4ztT.mjs";
import { t as Reveal } from "./reveal-D38yxK3Z.mjs";
import { n as ImageRail, t as CtaBand } from "./image-rail-u60umBUS.mjs";
import { t as PageHero } from "./page-hero-BdVp887Y.mjs";
import { t as SectionHeading } from "./section-heading-l5wJ2RA-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-wKR5MnR8.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"A packaging house,",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"recast."
			] }),
			lede: "Professionally managed. Growth-oriented. Two automatic plants, a working laboratory, and a fleet that belongs to us.",
			image: "/images/real-corrugator.jpg"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageRail, {
			images: GALLERY,
			className: "bg-ink"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The board",
					title: "The people who run the plants.",
					lede: "Brothers who came up in corrugated, and a promoter-director on the board. Not a hired-in letterhead."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: LEADERSHIP.map((person, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 70,
						className: "border border-line-paper bg-paper-2",
						children: [person.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "img-zoom overflow-hidden bg-sand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: person.image,
								alt: person.name,
								className: "aspect-[3/4] w-full object-cover object-top"
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex aspect-[3/4] items-end bg-ink p-6 text-fg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-6xl text-kraft",
								children: "SJ"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: person.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-2xl",
									children: person.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink-muted",
									children: person.copy
								})
							]
						})]
					}, person.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "overflow-hidden bg-ink text-fg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/people/promoters.jpg",
					alt: "Yash Bakliwal and Sapan Bakliwal",
					className: "aspect-[4/3] w-full object-cover object-top md:aspect-auto md:min-h-[28rem]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-end px-5 py-10 sm:px-10 md:px-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-4",
							children: "Promoters"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-title",
							children: [
								"Yash Bakliwal",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"and Sapan Bakliwal."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-lede text-fg-muted",
							children: "Managing Director and Whole-time Director & CFO. Civil engineers who learned corrugated on the floor, then bought the company and built the second plant."
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide grid items-center gap-8 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "image",
					className: "img-zoom md:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/real-lab.jpg",
						alt: "Quality laboratory at the Pithampur plant",
						className: "aspect-[4/3] w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							eyebrow: "The story",
							title: "From a 1986 incorporation to a corrugated platform.",
							lede: "The current promoters acquired the business between FY 2020 and 2022 and turned it toward packaging."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							className: "mt-5 space-y-3 text-ink-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Manufacturing began at Pithampur in FY 2021–22. Kanpur followed in 2024. In January 2025 the company converted to a public limited house. Industry Outlook named Udaan among India’s Top 10 corrugated box manufacturers in 2023." })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-2",
							children: STRENGTHS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-t border-line-paper pt-2 text-sm text-ink-fg",
								children: s
							}, s))
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper-2 py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Journey",
					title: "Milestones, not slogans."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 grid gap-px bg-line-paper sm:grid-cols-2",
					children: TIMELINE.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 20,
						className: "bg-paper-2 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-sm font-medium text-kraft",
							children: item.year
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-ink-fg",
							children: item.copy
						})]
					}, item.year))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { AboutPage as component };
