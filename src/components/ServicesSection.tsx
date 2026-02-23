import Link from "next/link";
import { SERVICES_LIST } from "@/lib/products";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-wood-900">
            Our products and services
          </h2>
          <p className="mt-3 text-wood-700">
            Export packing, domestic packaging, onsite packaging, heat treatment, palletization, and sawn timber.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-xl border border-wood-200 bg-wood-50/50 hover:border-wood-300 transition"
            >
              <h3 className="font-display text-lg font-semibold text-wood-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-wood-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-wood-600 text-white font-medium hover:bg-wood-700 transition"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
