import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Button, n as useQuote, v as cn } from "./router-Cf5W4ztT.mjs";
import { t as Reveal } from "./reveal-D38yxK3Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/image-rail-u60umBUS.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBand({ title = "Tell us the pack. We’ll engineer the rest.", copy = "Share a volume, a board grade, a destination. The plants at Pithampur and Kanpur will take it from there." }) {
	const { setOpen } = useQuote();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ink text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-wrap-wide flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-end md:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-5",
						children: "Work with Udaan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-title",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lede text-fg-muted",
						children: copy
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setOpen(true),
					size: "lg",
					children: "Request a quote"
				})
			})]
		})
	});
}
function ImageRail({ images, className }) {
	const loop = [...images, ...images];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("image-rail-mask", className),
		"aria-hidden": false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "image-rail",
			children: loop.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "image-rail-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img.src,
					alt: i < images.length ? img.alt : "",
					loading: i < 3 ? "eager" : "lazy"
				})
			}, `${img.src}-${i}`))
		})
	});
}
//#endregion
export { ImageRail as n, CtaBand as t };
