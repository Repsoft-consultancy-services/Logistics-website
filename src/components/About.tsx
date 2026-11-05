import { SITE } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-brand-ink text-balance">
          Durable Packaging Solutions by {SITE.name}
        </h2>
        <p className="mt-4 text-brand-muted leading-relaxed">
          {SITE.name} manufactures and supplies wooden pallets, boxes, and crates in Hyderabad.
          From our unit in Bowrampet we build packaging for warehouses, logistics, and export dispatch,
          with sturdy timber and consistent workmanship so goods move safely.
        </p>
        <p className="mt-3 text-brand-muted leading-relaxed">
          Standard sizes and custom packing are both available. Call us for a quote, a bulk order,
          or onsite packaging at your factory or warehouse.
        </p>
      </div>
    </section>
  );
}
