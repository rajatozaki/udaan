export const SITE = {
  name: "Udaan Paper Industries",
  short: "Udaan",
  legal: "Udaan Paper Industries Limited",
  tagline: "Gain a new perspective in packaging.",
  phone: "+91 96693 38888",
  phoneHref: "tel:+919669338888",
  email: "udaan@udaanindustries.com",
  emailHref: "mailto:udaan@udaanindustries.com",
};

export const NAV = [
  { to: "/about", label: "About" },
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/plants", label: "Plants" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/contact", label: "Contact" },
] as const;

export const PLANTS = [
  {
    id: "pithampur",
    name: "Unit I — Pithampur",
    region: "Madhya Pradesh",
    serves: "Central & West India",
    address: "Plot 445–446, Sector 3, Pithampur Industrial Area, Dhar, Madhya Pradesh 454777",
    area: "9,754 sq m",
    capacity: "22,500 TPA",
    expanding: "52,500 TPA",
    image: "/images/real-pithampur.jpg",
    started: "FY 2021–22",
  },
  {
    id: "kanpur",
    name: "Unit II — Kanpur",
    region: "Uttar Pradesh",
    serves: "North India",
    address: "172, Khanchandpur, Tehsil Akbarpur, Kanpur Dehat, Uttar Pradesh 209311",
    area: "4,100 sq m",
    capacity: "7,500 TPA",
    expanding: null,
    image: "/images/real-plant.jpg",
    started: "2024",
  },
] as const;

export const STATS = [
  { value: 2, suffix: "", label: "Automatic plants" },
  { value: 30000, suffix: " TPA", label: "Installed capacity" },
  { value: 26, suffix: "", label: "Owned trucks" },
  { value: 5, suffix: "", label: "ISO & GMP systems" },
] as const;

export const PRODUCTS = [
  {
    slug: "boxes",
    name: "Corrugated boxes",
    kicker: "01",
    image: "/images/boxes-kraft.jpg",
    summary:
      "Printed and plain RSC, die-cut and regular slotted cartons — from short runs of ten to thousands a shift, on fully automatic lines.",
    details:
      "Board grades, flute profiles and compression strengths are specified to the product, the route and the stacking plan. Single-colour or multi-colour print, inside and out.",
  },
  {
    slug: "printed",
    name: "Printed cartons",
    kicker: "02",
    image: "/images/boxes-printed.jpg",
    summary:
      "Brand-facing secondary packaging with registration that holds on kraft, white-top and mottled liners.",
    details:
      "Artwork is engineered with the structure, not applied after. Food-contact inks on request. Built for FMCG, bakery, dairy and personal care lines.",
  },
  {
    slug: "sheets",
    name: "Sheets & rolls",
    kicker: "03",
    image: "/images/sheets-rolls.jpg",
    summary:
      "Corrugated sheets and reels for converters and in-house packing halls that need board, not boxes.",
    details:
      "Consistent caliper, controlled moisture, and flute integrity across 3-ply and 5-ply. Cut-to-size or mill-width as specified.",
  },
  {
    slug: "custom",
    name: "Engineered structures",
    kicker: "04",
    image: "/images/diecut.jpg",
    summary:
      "Die-cut inserts, partitions and fitments that protect the product and speed the pack line.",
    details:
      "From a brief or a sample, we design the board architecture, prototype, test and lock the specification before the first production lot.",
  },
] as const;

export const INDUSTRIES = [
  {
    slug: "fmcg",
    name: "FMCG",
    image: "/images/industry-fmcg.jpg",
    copy: "Secondary and tertiary packs for snacks, staples and household brands that move every day.",
  },
  {
    slug: "food",
    name: "Food & beverage",
    image: "/images/industry-food.jpg",
    copy: "Bakery, packaged foods and beverage shippers specified for freshness, hygiene and handling.",
  },
  {
    slug: "dairy",
    name: "Dairy",
    image: "/images/industry-dairy.jpg",
    copy: "Cold-chain outer cartons and crates that keep their compression strength when the temperature drops.",
  },
  {
    slug: "textile",
    name: "Textile & apparel",
    image: "/images/industry-textile.jpg",
    copy: "Export cartons for mills and garment houses — clean, stacked, and built for long hauls.",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    image: "/images/industry-ecom.jpg",
    copy: "Mailers and shippers that survive the last mile without burying the product in void.",
  },
  {
    slug: "pharma",
    name: "Pharma",
    image: "/images/industry-pharma.jpg",
    copy: "Secondary cartons with the discipline a regulated supply chain expects.",
  },
  {
    slug: "industrial",
    name: "Industrial",
    image: "/images/industry-industrial.jpg",
    copy: "Heavy-duty corrugated for parts, hardware and anything that cannot arrive scuffed.",
  },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Brief",
    copy: "Volumes, board grade, print, destinations and the way the pack has to run on your line.",
  },
  {
    n: "02",
    title: "Design",
    copy: "Structure, artwork and a sample you can hold — tuned to product protection and cost.",
  },
  {
    n: "03",
    title: "Manufacture",
    copy: "Fully automatic corrugation and conversion under one roof at Pithampur and Kanpur.",
  },
  {
    n: "04",
    title: "Qualify",
    copy: "Burst, compression, GSM, moisture, RCT and ECT in our own laboratory, lot by lot.",
  },
  {
    n: "05",
    title: "Deliver",
    copy: "Twenty-six owned trucks, running North, Central and West India on our clock, not a vendor’s.",
  },
] as const;

export const CERTS = [
  { code: "ISO 9001:2015", name: "Quality management" },
  { code: "ISO 14001:2015", name: "Environmental management" },
  { code: "ISO 45001:2018", name: "Occupational health & safety" },
  { code: "ISO 10002:2018", name: "Customer satisfaction" },
  { code: "GMP", name: "Good manufacturing practice" },
] as const;

export const EQUIPMENT = [
  "Bursting machine (BS, BF)",
  "Compression tester",
  "GSM tester",
  "Moisture tester",
  "RCT / ECT tester",
  "Viscosity tester",
  "Calibrated weighing",
] as const;

export const STRENGTHS = [
  "Two fully automatic plants, Pithampur and Kanpur",
  "In-house laboratory on every production lot",
  "Own fleet of 26 trucks",
  "100% recyclable corrugated",
  "Named among India’s Top 10 corrugated box manufacturers, 2023 — Industry Outlook",
] as const;

export const CLIENTS = [
  "Parle Biscuits",
  "Mother Dairy",
  "Prataap Snacks",
  "Mrs. Bectors",
  "Maral Overseas",
  "Akash Global Foods",
  "Golden Food Products",
] as const;

export const TIMELINE = [
  { year: "1986", copy: "Incorporated as Sunny Steels Private Limited." },
  { year: "2020–22", copy: "Acquired by Sapan Bakliwal, Yash Bakliwal and Shubhangi Jain." },
  { year: "2021", copy: "Renamed Udaan Paper Industries Private Limited." },
  { year: "2021–22", copy: "Corrugated manufacturing begins at Pithampur." },
  { year: "2023", copy: "Industry Outlook: Top 10 corrugated box manufacturers, for quality and delivery." },
  { year: "2024", copy: "Second automatic plant commissioned at Kanpur." },
  { year: "2025", copy: "Converted to a public limited company." },
  { year: "2026", copy: "Pithampur expansion underway — group capacity toward 60,000 TPA." },
] as const;

export const MARQUEE = [
  "Fully automatic lines",
  "Pithampur · Kanpur",
  "30,000 TPA",
  "26 owned trucks",
  "100% recyclable",
  "ISO 9001 · 14001 · 45001",
  "In-house laboratory",
  "FMCG · Food · Textile · Industrial",
];

export const LEADERSHIP = [
  {
    name: "Yash Bakliwal",
    role: "Managing Director",
    image: "/images/people/yash-bakliwal.jpg",
    copy: "BE Civil. Nine years in corrugated. Runs the house day to day — plants, customers and the specification.",
  },
  {
    name: "Sapan Bakliwal",
    role: "Whole-time Director & CFO",
    image: "/images/people/sapan-bakliwal.jpg",
    copy: "BE Civil. Thirteen years in the trade. Production, finance, HR and legal — the plant and the books.",
  },
  {
    name: "Shubhangi Jain",
    role: "Non-Executive Director",
    image: null,
    copy: "BA Fashion Designing. Promoter-director. Brand, structure and the look of the pack from the board side.",
  },
] as const;

export const GALLERY = [
  { src: "/images/real-warehouse.jpg", alt: "Finished kraft boxes in the Pithampur warehouse" },
  { src: "/images/real-corrugator.jpg", alt: "Automatic corrugator hall" },
  { src: "/images/real-lab.jpg", alt: "Quality laboratory on the plant floor" },
  { src: "/images/real-plant.jpg", alt: "Kanpur plant exterior" },
  { src: "/images/real-pithampur.jpg", alt: "Pithampur plant campus" },
  { src: "/images/gallery-rolls.jpg", alt: "Kraft paper rolls on the plant floor" },
  { src: "/images/gallery-dock.jpg", alt: "Loading bay at dusk" },
  { src: "/images/gallery-print.jpg", alt: "Flexo print on kraft board" },
  { src: "/images/gallery-sheets.jpg", alt: "Stacked corrugated sheets" },
  { src: "/images/boxes-kraft.jpg", alt: "Finished corrugated boxes" },
  { src: "/images/fleet.jpg", alt: "Owned delivery fleet" },
] as const;
