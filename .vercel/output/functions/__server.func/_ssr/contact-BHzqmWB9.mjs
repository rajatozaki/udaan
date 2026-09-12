import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Mail, r as Phone } from "../_libs/lucide-react.mjs";
import { _ as Button, p as SITE, s as INDUSTRIES, u as PLANTS } from "./router-Cf5W4ztT.mjs";
import { t as Reveal } from "./reveal-D38yxK3Z.mjs";
import { t as PageHero } from "./page-hero-BdVp887Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BHzqmWB9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"The plants are running.",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			"Send the brief."
		] }),
		lede: "Pithampur and Kanpur. A laboratory. Twenty-six trucks. Tell us the pack.",
		image: "/images/fleet.jpg"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-paper py-12 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-wrap-wide grid gap-10 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Direct"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-title",
						children: "Talk to Udaan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.phoneHref,
							className: "flex items-center gap-3 text-ink-fg transition-colors hover:text-ink-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), SITE.phone]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.emailHref,
							className: "flex items-center gap-3 text-ink-fg transition-colors hover:text-ink-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), SITE.email]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 space-y-8",
						children: PLANTS.map((plant) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: plant.image,
								alt: "",
								className: "mb-3 aspect-[16/10] w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: plant.region
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl",
								children: plant.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-sm text-sm leading-relaxed text-ink-muted",
								children: plant.address
							})
						] }, plant.id))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "border border-line-paper bg-paper p-6 md:p-10 md:col-span-7",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-80 flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Received"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-4xl",
							children: "The brief is with us."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-md text-ink-muted",
							children: [
								"We’ll reply with a specification or a question. For something that cannot wait, call ",
								SITE.phone,
								"."
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4 sm:grid-cols-2",
					onSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							name: "name",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Company",
							name: "company",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							name: "email",
							type: "email",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							name: "phone",
							type: "tel",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-2 block text-[0.68rem] font-medium tracking-[0.16em] uppercase text-ink-muted",
								children: "Industry"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "industry",
								className: "field-input",
								defaultValue: "",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Select"
								}), INDUSTRIES.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: ind.name,
									children: ind.name
								}, ind.slug))]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-2 block text-[0.68rem] font-medium tracking-[0.16em] uppercase text-ink-muted",
								children: "Brief"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								required: true,
								rows: 5,
								className: "field-input",
								placeholder: "Board grade, size, print, monthly volume, destination…"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ink",
								type: "submit",
								children: "Send"
							})
						})
					]
				})
			})]
		})
	})] });
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block text-[0.68rem] font-medium tracking-[0.16em] uppercase text-ink-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			className: "field-input"
		})]
	});
}
//#endregion
export { ContactPage as component };
