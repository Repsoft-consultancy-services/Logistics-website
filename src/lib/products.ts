// Products & services we offer (aligned with industry standards)
export const PRODUCTS = [
  {
    slug: "wooden-pallets",
    title: "Wooden Pallets",
    shortDesc: "Durable wooden pallets built to handle heavy loads. Quick delivery, export certified, heat-treated pallets.",
    description: "We manufacture domestic and export wooden pallets. Standard and custom sizes for warehousing, logistics, and export. Built for heavy loads and repeated use. Quick delivery, export certified, heat-treated pallets available.",
    features: ["Quick Delivery", "Export Certified", "Heat-Treated Pallets"],
    cta: "Get a quote",
  },
  {
    slug: "wooden-boxes",
    title: "Wooden Boxes",
    shortDesc: "Custom wooden boxes for reliable cargo protection. Quick turnaround, export-grade, built to your specs.",
    description: "Manufacturers of wooden boxes and plywood boxes. Order custom wooden boxes for reliable cargo protection. Quick turnaround, export-grade, built to your specifications.",
    features: ["Quick Turnaround", "Export-Grade", "Built To Your Specs"],
    cta: "Get a quote",
  },
  {
    slug: "wooden-crates",
    title: "Wooden Crates",
    shortDesc: "Strong wooden crates for hassle-free shipping and storage. Fast dispatch, tailored dimensions, premium quality.",
    description: "Manufacturers of wooden crates and plywood crates. Strong wooden crates for hassle-free shipping and storage. Fast dispatch, tailored dimensions, premium quality.",
    features: ["Fast Dispatch", "Tailored Dimensions", "Premium Quality"],
    cta: "Get a quote",
  },
] as const;

export const SERVICES_LIST = [
  { title: "Export Packing", desc: "Export-ready packaging meeting international shipping standards for safe delivery across borders." },
  { title: "Domestic Packaging", desc: "Cost-effective domestic packaging for safe transit within India, tailored to your industry." },
  { title: "Onsite Packaging", desc: "Professional onsite packaging at your factory, warehouse, or dispatch center." },
  { title: "Heat Treatment & Fumigation", desc: "Certified fumigation and ISPM-15 heat treatment for export packaging and pest-free delivery." },
  { title: "Palletization Services", desc: "Efficient palletization for load stability, space optimization, and safe transit." },
  { title: "Sawn Timber", desc: "Pine and hardwood cut/sawn to your required sizes for packaging and construction." },
] as const;

export const CATALOG = [
  {
    title: "Wooden Boxes, Crates & Packing",
    href: "/products/wooden-boxes",
    imageIndex: 1,
    items: [
      "Wooden Boxes",
      "Wooden Crates",
      "Plywood Boxes",
      "Export Packing Boxes",
      "Custom Size Boxes",
      "Heavy Duty Crates",
      "Domestic Packing Boxes",
      "Onsite Packing",
    ],
  },
  {
    title: "Wooden Pallets",
    href: "/products/wooden-pallets",
    imageIndex: 0,
    items: [
      "Standard Wooden Pallets",
      "Heavy Duty Pallets",
      "Two Way Pallets",
      "Four Way Pallets",
      "Export Pallets",
      "Heat-Treated Pallets",
      "Custom Size Pallets",
    ],
  },
  {
    title: "Packaging Services",
    href: "/contact",
    imageIndex: 3,
    items: [
      "Export Packing",
      "Domestic Packaging",
      "Onsite Packaging",
      "Heat Treatment",
      "Fumigation",
      "Palletization",
      "Sawn Timber",
    ],
  },
] as const;
