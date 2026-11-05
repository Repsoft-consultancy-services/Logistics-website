const highlights = [
  {
    title: "Wooden Boxes",
    text: "Custom wooden and plywood boxes for cargo that needs a solid, export-ready enclosure.",
  },
  {
    title: "Pallet Packing",
    text: "Durable wooden pallets in standard and custom sizes for warehouse and transport loads.",
  },
  {
    title: "Wooden Crates",
    text: "Strong crates for shipping and storage, built to the dimensions your goods require.",
  },
  {
    title: "Heat Treatment",
    text: "Heat treatment and fumigation for export packaging, including ISPM-15 treatment.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="pb-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item) => (
          <div key={item.title}>
            <h2 className="font-display text-xl font-semibold text-brand-blue">{item.title}</h2>
            <p className="mt-3 text-sm text-brand-muted leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
