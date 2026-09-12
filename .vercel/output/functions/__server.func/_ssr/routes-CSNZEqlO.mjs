import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { _ as Button, c as LEADERSHIP, d as PROCESS, f as PRODUCTS, i as CLIENTS, l as MARQUEE, m as STATS, n as useQuote, o as GALLERY, r as CERTS, s as INDUSTRIES, u as PLANTS } from "./router-Cf5W4ztT.mjs";
import { t as Reveal } from "./reveal-D38yxK3Z.mjs";
import { n as ImageRail, t as CtaBand } from "./image-rail-u60umBUS.mjs";
import { t as SectionHeading } from "./section-heading-l5wJ2RA-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CSNZEqlO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CountUp({ value, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [display, setDisplay] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		let frame = 0;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const io = new IntersectionObserver(([entry]) => {
			if (!entry?.isIntersecting) return;
			io.disconnect();
			if (reduced) {
				setDisplay(value);
				return;
			}
			const start = performance.now();
			const duration = 1100;
			const tick = (now) => {
				const t = Math.min(1, (now - start) / duration);
				const eased = 1 - Math.pow(1 - t, 3);
				setDisplay(Math.round(value * eased));
				if (t < 1) frame = requestAnimationFrame(tick);
			};
			frame = requestAnimationFrame(tick);
		}, { threshold: .4 });
		io.observe(el);
		return () => {
			io.disconnect();
			cancelAnimationFrame(frame);
		};
	}, [value]);
	const formatted = value >= 1e3 ? display.toLocaleString("en-IN") : String(display);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "tabular-nums",
		children: [formatted, suffix]
	});
}
function Home() {
	const { setOpen } = useQuote();
	const [reduceMotion, setReduceMotion] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex min-h-svh items-end overflow-hidden bg-ink text-fg",
			children: [
				reduceMotion ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-line.jpg",
					alt: "",
					className: "hero-media absolute inset-0 size-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "hero-media absolute inset-0 size-full object-cover",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					poster: "/images/hero-line.jpg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: "/videos/hero-line.mp4",
						type: "video/mp4"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-scrim absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "noise" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-enter site-wrap-wide relative z-10 w-full pb-16 pt-32 md:pb-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-6",
							children: "Udaan Paper Industries"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "max-w-5xl font-display text-display",
							children: [
								"Gain a new perspective",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"in packaging."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl text-lede text-fg-muted",
							children: "Fully automatic plants in Pithampur and Kanpur. Corrugated boxes, sheets and rolls for the brands that feed, clothe and move India."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/solutions",
									children: "Explore solutions"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								className: "text-fg",
								onClick: () => setOpen(true),
								children: "Request a quote"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageRail, {
			images: GALLERY,
			className: "bg-ink"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden border-y border-line bg-ink-2 py-4 text-fg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track",
				children: [...MARQUEE, ...MARQUEE].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-8 font-sans text-sm font-medium tracking-tight text-fg-muted",
					children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-kraft",
						"aria-hidden": true,
						children: "/"
					})]
				}, `${item}-${i}`))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide grid items-center gap-12 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "The company",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Two plants. One specification.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " Relentless delivery." })] }),
						lede: "Udaan Paper Industries Limited is a corrugated packaging manufacturer with fully automatic production at Pithampur, Madhya Pradesh and Kanpur, Uttar Pradesh — close to the FMCG, food and textile clusters we serve."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 80,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-ink-muted",
							children: "From board design to the dock, the process stays in-house: corrugation, conversion, a working laboratory, and a fleet of twenty-six trucks. Named among India’s Top 10 corrugated box manufacturers in 2023."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-ink-fg transition-colors hover:text-ink-muted",
							children: ["Read the story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					variant: "image",
					className: "img-zoom md:col-span-6",
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/real-warehouse.jpg",
						alt: "Kraft boxes staged in the Pithampur warehouse",
						className: "aspect-[4/3] w-full object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line-paper bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "site-wrap-wide grid grid-cols-2 gap-px bg-line-paper md:grid-cols-4",
				children: STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-paper-2 px-5 py-10 md:px-8 md:py-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl text-ink-fg md:text-5xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							value: stat.value,
							suffix: stat.suffix
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm tracking-tight text-ink-muted",
						children: stat.label
					})]
				}, stat.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide grid items-end gap-8 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "The board",
						title: "The people who run the plants.",
						lede: "Brothers who came up in corrugated — not a hired-in letterhead."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						className: "mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-tight",
						children: ["Meet the promoters", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 md:col-span-8",
					children: LEADERSHIP.filter((p) => p.image).map((person, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "group block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "img-zoom overflow-hidden bg-sand",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: person.image,
										alt: person.name,
										className: "aspect-[4/5] w-full object-cover object-top"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-display text-xl",
									children: person.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-ink-muted",
									children: person.role
								})
							]
						})
					}, person.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Solutions",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Packaging, specified", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " for the product." })] }),
					lede: "Boxes, printed cartons, sheets, rolls and engineered structures — produced on automatic lines, qualified in our laboratory."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-2",
					children: PRODUCTS.map((product, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/solutions",
							hash: product.slug,
							className: "group block border border-line-paper bg-paper transition-colors hover:border-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "img-zoom",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: product.image,
									alt: "",
									className: "aspect-[16/10] w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4 p-6 md:p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: product.kicker
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-3xl",
										children: product.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-md text-sm leading-relaxed text-ink-muted",
										children: product.summary
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-1 size-5 shrink-0 text-ink-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							})]
						})
					}, product.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink py-12 text-fg md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					onDark: true,
					eyebrow: "The Udaan cycle",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["From brief to", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " dock." })] }),
					lede: "Five steps, none of them outsourced. The same team that designs the pack qualifies it and puts it on a truck."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5",
					children: PROCESS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 50,
						className: "bg-ink px-5 py-8 md:px-6 md:py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-[0.7rem] tracking-[0.22em] text-kraft",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-2xl",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-fg-muted",
								children: step.copy
							})
						]
					}, step.n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Industries",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Built for the way", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " India ships." })] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/industries",
						className: "inline-flex items-center gap-2 text-sm font-medium tracking-tight",
						children: ["All industries", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: INDUSTRIES.map((ind, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 50,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/industries",
							hash: ind.slug,
							className: "group relative block overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "img-zoom",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: ind.image,
										alt: "",
										className: "aspect-[4/5] w-full object-cover"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 p-5 text-fg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl",
										children: ind.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 line-clamp-2 text-sm text-fg-muted",
										children: ind.copy
									})]
								})
							]
						})
					}, ind.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper-2 py-12 md:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Infrastructure",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Pithampur. Kanpur.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " North, Central, West." })] }),
					lede: "Two automatic plants placed against the consumption belts they serve, with an in-house fleet between the dock and the customer."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-2",
					children: PLANTS.map((plant, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/plants",
							hash: plant.id,
							className: "group block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "img-zoom",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: plant.image,
									alt: "",
									className: "aspect-[16/10] w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: plant.serves
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-3xl",
										children: plant.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm text-ink-muted",
										children: [
											plant.capacity,
											" installed · ",
											plant.area,
											plant.expanding ? ` · expanding to ${plant.expanding}` : ""
										]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 text-ink-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							})]
						})
					}, plant.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/flute.jpg",
					alt: "",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/70" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "site-wrap-wide relative grid gap-8 py-14 text-fg md:grid-cols-2 md:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-5",
						children: "Trusted by"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-title",
						children: ["The brands that already", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: " move on Udaan board." })]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 80,
						className: "flex flex-col justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
							children: CLIENTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-t border-fg/15 pt-3 text-sm tracking-wide text-fg",
								children: c
							}, c))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-sm text-fg-muted",
							children: "And a growing book across food, textile and industrial accounts in North, Central and West India."
						})]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "site-wrap-wide flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Certified systems"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-x-8 gap-y-3",
					children: CERTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-sm font-medium text-ink-fg",
						children: c.code
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-ink-muted",
						children: c.name
					})] }, c.code))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})
	] });
}
//#endregion
export { Home as component };
