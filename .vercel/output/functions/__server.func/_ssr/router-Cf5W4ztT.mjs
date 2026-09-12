import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Menu, n as TriangleAlert, o as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cf5W4ztT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-tight transition-[color,background-color,border-color,transform,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kraft focus-visible:ring-offset-2", {
	variants: {
		variant: {
			primary: "bg-paper text-ink-fg ring-offset-ink hover:bg-paper-2",
			ink: "bg-ink text-fg ring-offset-paper hover:bg-ink-2",
			outline: "border border-current bg-transparent text-inherit hover:bg-fg/8",
			ghost: "bg-transparent text-inherit hover:text-kraft"
		},
		size: {
			md: "h-12 px-6",
			lg: "h-14 px-8",
			sm: "h-10 px-4 text-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var SITE = {
	name: "Udaan Paper Industries",
	short: "Udaan",
	legal: "Udaan Paper Industries Limited",
	tagline: "Gain a new perspective in packaging.",
	phone: "+91 96693 38888",
	phoneHref: "tel:+919669338888",
	email: "udaan@udaanindustries.com",
	emailHref: "mailto:udaan@udaanindustries.com"
};
var NAV = [
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/solutions",
		label: "Solutions"
	},
	{
		to: "/industries",
		label: "Industries"
	},
	{
		to: "/plants",
		label: "Plants"
	},
	{
		to: "/sustainability",
		label: "Sustainability"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var PLANTS = [{
	id: "pithampur",
	name: "Unit I — Pithampur",
	region: "Madhya Pradesh",
	serves: "Central & West India",
	address: "Plot 445–446, Sector 3, Pithampur Industrial Area, Dhar, Madhya Pradesh 454777",
	area: "9,754 sq m",
	capacity: "22,500 TPA",
	expanding: "52,500 TPA",
	image: "/images/real-pithampur.jpg",
	started: "FY 2021–22"
}, {
	id: "kanpur",
	name: "Unit II — Kanpur",
	region: "Uttar Pradesh",
	serves: "North India",
	address: "172, Khanchandpur, Tehsil Akbarpur, Kanpur Dehat, Uttar Pradesh 209311",
	area: "4,100 sq m",
	capacity: "7,500 TPA",
	expanding: null,
	image: "/images/real-plant.jpg",
	started: "2024"
}];
var STATS = [
	{
		value: 2,
		suffix: "",
		label: "Automatic plants"
	},
	{
		value: 3e4,
		suffix: " TPA",
		label: "Installed capacity"
	},
	{
		value: 26,
		suffix: "",
		label: "Owned trucks"
	},
	{
		value: 5,
		suffix: "",
		label: "ISO & GMP systems"
	}
];
var PRODUCTS = [
	{
		slug: "boxes",
		name: "Corrugated boxes",
		kicker: "01",
		image: "/images/boxes-kraft.jpg",
		summary: "Printed and plain RSC, die-cut and regular slotted cartons — from short runs of ten to thousands a shift, on fully automatic lines.",
		details: "Board grades, flute profiles and compression strengths are specified to the product, the route and the stacking plan. Single-colour or multi-colour print, inside and out."
	},
	{
		slug: "printed",
		name: "Printed cartons",
		kicker: "02",
		image: "/images/boxes-printed.jpg",
		summary: "Brand-facing secondary packaging with registration that holds on kraft, white-top and mottled liners.",
		details: "Artwork is engineered with the structure, not applied after. Food-contact inks on request. Built for FMCG, bakery, dairy and personal care lines."
	},
	{
		slug: "sheets",
		name: "Sheets & rolls",
		kicker: "03",
		image: "/images/sheets-rolls.jpg",
		summary: "Corrugated sheets and reels for converters and in-house packing halls that need board, not boxes.",
		details: "Consistent caliper, controlled moisture, and flute integrity across 3-ply and 5-ply. Cut-to-size or mill-width as specified."
	},
	{
		slug: "custom",
		name: "Engineered structures",
		kicker: "04",
		image: "/images/diecut.jpg",
		summary: "Die-cut inserts, partitions and fitments that protect the product and speed the pack line.",
		details: "From a brief or a sample, we design the board architecture, prototype, test and lock the specification before the first production lot."
	}
];
var INDUSTRIES = [
	{
		slug: "fmcg",
		name: "FMCG",
		image: "/images/industry-fmcg.jpg",
		copy: "Secondary and tertiary packs for snacks, staples and household brands that move every day."
	},
	{
		slug: "food",
		name: "Food & beverage",
		image: "/images/industry-food.jpg",
		copy: "Bakery, packaged foods and beverage shippers specified for freshness, hygiene and handling."
	},
	{
		slug: "dairy",
		name: "Dairy",
		image: "/images/industry-dairy.jpg",
		copy: "Cold-chain outer cartons and crates that keep their compression strength when the temperature drops."
	},
	{
		slug: "textile",
		name: "Textile & apparel",
		image: "/images/industry-textile.jpg",
		copy: "Export cartons for mills and garment houses — clean, stacked, and built for long hauls."
	},
	{
		slug: "ecommerce",
		name: "E-commerce",
		image: "/images/industry-ecom.jpg",
		copy: "Mailers and shippers that survive the last mile without burying the product in void."
	},
	{
		slug: "pharma",
		name: "Pharma",
		image: "/images/industry-pharma.jpg",
		copy: "Secondary cartons with the discipline a regulated supply chain expects."
	},
	{
		slug: "industrial",
		name: "Industrial",
		image: "/images/industry-industrial.jpg",
		copy: "Heavy-duty corrugated for parts, hardware and anything that cannot arrive scuffed."
	}
];
var PROCESS = [
	{
		n: "01",
		title: "Brief",
		copy: "Volumes, board grade, print, destinations and the way the pack has to run on your line."
	},
	{
		n: "02",
		title: "Design",
		copy: "Structure, artwork and a sample you can hold — tuned to product protection and cost."
	},
	{
		n: "03",
		title: "Manufacture",
		copy: "Fully automatic corrugation and conversion under one roof at Pithampur and Kanpur."
	},
	{
		n: "04",
		title: "Qualify",
		copy: "Burst, compression, GSM, moisture, RCT and ECT in our own laboratory, lot by lot."
	},
	{
		n: "05",
		title: "Deliver",
		copy: "Twenty-six owned trucks, running North, Central and West India on our clock, not a vendor’s."
	}
];
var CERTS = [
	{
		code: "ISO 9001:2015",
		name: "Quality management"
	},
	{
		code: "ISO 14001:2015",
		name: "Environmental management"
	},
	{
		code: "ISO 45001:2018",
		name: "Occupational health & safety"
	},
	{
		code: "ISO 10002:2018",
		name: "Customer satisfaction"
	},
	{
		code: "GMP",
		name: "Good manufacturing practice"
	}
];
var EQUIPMENT = [
	"Bursting machine (BS, BF)",
	"Compression tester",
	"GSM tester",
	"Moisture tester",
	"RCT / ECT tester",
	"Viscosity tester",
	"Calibrated weighing"
];
var STRENGTHS = [
	"Two fully automatic plants, Pithampur and Kanpur",
	"In-house laboratory on every production lot",
	"Own fleet of 26 trucks",
	"100% recyclable corrugated",
	"Named among India’s Top 10 corrugated box manufacturers, 2023 — Industry Outlook"
];
var CLIENTS = [
	"Parle Biscuits",
	"Mother Dairy",
	"Prataap Snacks",
	"Mrs. Bectors",
	"Maral Overseas",
	"Akash Global Foods",
	"Golden Food Products"
];
var TIMELINE = [
	{
		year: "1986",
		copy: "Incorporated as Sunny Steels Private Limited."
	},
	{
		year: "2020–22",
		copy: "Acquired by Sapan Bakliwal, Yash Bakliwal and Shubhangi Jain."
	},
	{
		year: "2021",
		copy: "Renamed Udaan Paper Industries Private Limited."
	},
	{
		year: "2021–22",
		copy: "Corrugated manufacturing begins at Pithampur."
	},
	{
		year: "2023",
		copy: "Industry Outlook: Top 10 corrugated box manufacturers, for quality and delivery."
	},
	{
		year: "2024",
		copy: "Second automatic plant commissioned at Kanpur."
	},
	{
		year: "2025",
		copy: "Converted to a public limited company."
	},
	{
		year: "2026",
		copy: "Pithampur expansion underway — group capacity toward 60,000 TPA."
	}
];
var MARQUEE = [
	"Fully automatic lines",
	"Pithampur · Kanpur",
	"30,000 TPA",
	"26 owned trucks",
	"100% recyclable",
	"ISO 9001 · 14001 · 45001",
	"In-house laboratory",
	"FMCG · Food · Textile · Industrial"
];
var LEADERSHIP = [
	{
		name: "Yash Bakliwal",
		role: "Managing Director",
		image: "/images/people/yash-bakliwal.jpg",
		copy: "BE Civil. Nine years in corrugated. Runs the house day to day — plants, customers and the specification."
	},
	{
		name: "Sapan Bakliwal",
		role: "Whole-time Director & CFO",
		image: "/images/people/sapan-bakliwal.jpg",
		copy: "BE Civil. Thirteen years in the trade. Production, finance, HR and legal — the plant and the books."
	},
	{
		name: "Shubhangi Jain",
		role: "Non-Executive Director",
		image: null,
		copy: "BA Fashion Designing. Promoter-director. Brand, structure and the look of the pack from the board side."
	}
];
var GALLERY = [
	{
		src: "/images/real-warehouse.jpg",
		alt: "Finished kraft boxes in the Pithampur warehouse"
	},
	{
		src: "/images/real-corrugator.jpg",
		alt: "Automatic corrugator hall"
	},
	{
		src: "/images/real-lab.jpg",
		alt: "Quality laboratory on the plant floor"
	},
	{
		src: "/images/real-plant.jpg",
		alt: "Kanpur plant exterior"
	},
	{
		src: "/images/real-pithampur.jpg",
		alt: "Pithampur plant campus"
	},
	{
		src: "/images/gallery-rolls.jpg",
		alt: "Kraft paper rolls on the plant floor"
	},
	{
		src: "/images/gallery-dock.jpg",
		alt: "Loading bay at dusk"
	},
	{
		src: "/images/gallery-print.jpg",
		alt: "Flexo print on kraft board"
	},
	{
		src: "/images/gallery-sheets.jpg",
		alt: "Stacked corrugated sheets"
	},
	{
		src: "/images/boxes-kraft.jpg",
		alt: "Finished corrugated boxes"
	},
	{
		src: "/images/fleet.jpg",
		alt: "Owned delivery fleet"
	}
];
var QuoteContext = (0, import_react.createContext)(null);
function QuoteProvider({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteContext.Provider, {
		value: {
			open,
			setOpen
		},
		children
	});
}
function useQuote() {
	const ctx = (0, import_react.useContext)(QuoteContext);
	if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
	return ctx;
}
function QuoteSheet() {
	const { open, setOpen } = useQuote();
	const [sent, setSent] = (0, import_react.useState)(false);
	const [entered, setEntered] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) {
			setEntered(false);
			return;
		}
		const id = requestAnimationFrame(() => setEntered(true));
		return () => cancelAnimationFrame(id);
	}, [open]);
	function onSubmit(e) {
		e.preventDefault();
		setSent(true);
	}
	function close() {
		setEntered(false);
		window.setTimeout(() => {
			setOpen(false);
			setSent(false);
		}, 280);
	}
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[60] overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Close quote form",
			className: cn("absolute inset-0 bg-ink/55 transition-opacity duration-300", entered ? "opacity-100" : "opacity-0"),
			onClick: close
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: cn("absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-paper text-ink-fg shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]", entered ? "translate-x-0" : "translate-x-full"),
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "quote-title",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-line-paper px-6 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Specification"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "quote-title",
					className: "mt-1 font-display text-2xl",
					children: "Request a quote"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: close,
					className: "flex size-11 items-center justify-center",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto px-6 py-6",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Received"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-3xl",
							children: "We’ll come back with a specification."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-ink-muted",
							children: [
								"A member of the Udaan team will reach you at the details you left. For something urgent, call ",
								SITE.phone,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ink",
							className: "mt-8 w-fit",
							onClick: close,
							children: "Close"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex flex-col gap-4",
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
							className: "block",
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
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-2 block text-[0.68rem] font-medium tracking-[0.16em] uppercase text-ink-muted",
								children: "What do you need?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								required: true,
								rows: 4,
								className: "field-input"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ink",
							type: "submit",
							className: "mt-2",
							children: "Send the brief"
						})
					]
				})
			})]
		})]
	});
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
function Logo({ size = "sm" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: "inline-flex items-center",
		"aria-label": "Udaan Paper Industries, home",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/brand/udaan-logo.png",
			alt: "Udaan Paper Industries",
			className: cn("w-auto", size === "lg" ? "h-11 md:h-12" : "h-9 md:h-10")
		})
	});
}
function SiteFooter() {
	const { setOpen } = useQuote();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-wrap-wide grid gap-10 border-b border-line py-12 md:grid-cols-12 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
							onDark: true,
							size: "lg"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-sm text-lede text-fg-muted",
							children: "Corrugated boxes, sheets and rolls from two automatic plants — designed, qualified and delivered on our own fleet."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen(true),
							className: "mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium tracking-tight text-gold transition-colors hover:text-fg",
							children: ["Start a specification", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-5",
						children: "Navigate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-sm text-fg-muted transition-colors hover:text-fg",
							children: item.label
						}) }, item.to))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-5 grid gap-8 sm:grid-cols-2",
					children: PLANTS.map((plant) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-3",
							children: plant.region
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl text-fg",
							children: plant.name.replace("Unit I — ", "").replace("Unit II — ", "")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-fg-muted",
							children: plant.address
						})
					] }, plant.id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-wrap-wide flex flex-col gap-4 py-6 text-xs tracking-wide text-fg-muted sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				SITE.legal
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-x-6 gap-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: SITE.phoneHref,
					className: "hover:text-fg",
					children: SITE.phone
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: SITE.emailHref,
					className: "hover:text-fg",
					children: SITE.email
				})]
			})]
		})]
	});
}
function SiteHeader() {
	const { setOpen } = useQuote();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [menu, setMenu] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setMenu(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menu ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menu]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300", scrolled || menu || pathname !== "/" ? "border-b border-line/80 bg-ink/92 backdrop-blur-md" : "border-b border-transparent bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-wrap-wide flex h-16 items-center justify-between gap-4 md:h-[4.5rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
					onDark: true,
					compact: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: cn("font-sans text-[0.9375rem] font-medium tracking-tight transition-colors duration-200", pathname === item.to ? "text-gold" : "text-fg/80 hover:text-fg"),
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "primary",
						size: "sm",
						className: "hidden sm:inline-flex",
						onClick: () => setOpen(true),
						children: "Request a quote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center text-fg lg:hidden",
						"aria-label": menu ? "Close menu" : "Open menu",
						"aria-expanded": menu,
						onClick: () => setMenu((v) => !v),
						children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-x-0 top-16 bottom-0 z-40 bg-ink px-5 pb-10 pt-6 lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-1",
				"aria-label": "Mobile",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "border-b border-line py-4 font-display text-3xl font-medium text-fg",
					children: item.label
				}, item.to))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-8 w-full",
				onClick: () => setOpen(true),
				children: "Request a quote"
			})]
		}) : null]
	});
}
var styles_default = "/assets/styles-Bq1qvwir.css";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${SITE.name} — Engineered corrugated packaging` },
			{
				name: "description",
				content: "Udaan Paper Industries Limited manufactures corrugated boxes, sheets and rolls at fully automatic plants in Pithampur and Kanpur — serving FMCG, food, textile and industrial brands across India."
			},
			{
				name: "theme-color",
				content: "#0b0a08"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QuoteProvider, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteSheet, {})
			] }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$6 = () => import("./routes-CSNZEqlO.mjs");
var Route$6 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./about-wKR5MnR8.mjs");
var Route$5 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "About — Udaan Paper Industries" }] })
});
var $$splitComponentImporter$4 = () => import("./contact-BHzqmWB9.mjs");
var Route$4 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Contact — Udaan Paper Industries" }] })
});
var $$splitComponentImporter$3 = () => import("./industries-BQMgkkQl.mjs");
var Route$3 = createFileRoute("/industries")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Industries — Udaan Paper Industries" }] })
});
var $$splitComponentImporter$2 = () => import("./plants-CI64_Rb4.mjs");
var Route$2 = createFileRoute("/plants")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Plants — Udaan Paper Industries" }] })
});
var $$splitComponentImporter$1 = () => import("./solutions-DJxKUzWB.mjs");
var Route$1 = createFileRoute("/solutions")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Solutions — Udaan Paper Industries" }] })
});
var $$splitComponentImporter = () => import("./sustainability-CtTuo6tx.mjs");
var Route = createFileRoute("/sustainability")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: "Sustainability — Udaan Paper Industries" }] })
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	IndustriesRoute: Route$3.update({
		id: "/industries",
		path: "/industries",
		getParentRoute: () => Route$7
	}),
	PlantsRoute: Route$2.update({
		id: "/plants",
		path: "/plants",
		getParentRoute: () => Route$7
	}),
	SolutionsRoute: Route$1.update({
		id: "/solutions",
		path: "/solutions",
		getParentRoute: () => Route$7
	}),
	SustainabilityRoute: Route.update({
		id: "/sustainability",
		path: "/sustainability",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Button as _, EQUIPMENT as a, LEADERSHIP as c, PROCESS as d, PRODUCTS as f, TIMELINE as g, STRENGTHS as h, CLIENTS as i, MARQUEE as l, STATS as m, useQuote as n, GALLERY as o, SITE as p, CERTS as r, INDUSTRIES as s, router_exports as t, PLANTS as u, cn as v };
