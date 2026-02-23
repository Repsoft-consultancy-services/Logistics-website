const items = [
  {
    title: "Over a decade of experience",
    desc: "Trusted wooden packaging—specialists in pallets, boxes, and crates crafted for strength, safety, and export.",
  },
  {
    title: "Best industry experts",
    desc: "We deliver premium wooden pallets, boxes, and crates tailored for export and domestic packaging standards.",
  },
  {
    title: "Fast & effective solutions",
    desc: "Wooden packaging crafted for strength, speed, and precision. On-time, secure delivery.",
  },
  {
    title: "Flexible pricing",
    desc: "Affordable and flexible pricing for custom pallets, boxes, and crates without compromising quality.",
  },
];

export default function Certifications() {
  return (
    <section className="py-16 sm:py-24 bg-wood-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-wood-600 text-sm font-semibold uppercase tracking-wider">
            Our strengths
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-wood-900 mt-2">
            What we bring to the table
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-wood-200 p-6 shadow-sm text-center"
            >
              <h3 className="font-display text-lg font-semibold text-wood-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-wood-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
