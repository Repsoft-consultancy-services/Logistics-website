import Image from "next/image";

const services = [
  {
    title: "Wooden Pallets",
    description: "Standard and custom-sized wooden pallets for warehousing, logistics, and export. Built for heavy loads and repeated use.",
    icon: "M20 7l-8 4-8-4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Wooden pallets stacked",
  },
  {
    title: "Packaging Solutions",
    description: "Tailored packaging to protect your products during storage and transit. We work with your specifications and volume.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Packaging and boxes in warehouse",
  },
  {
    title: "Bulk Supply",
    description: "Consistent supply for businesses that need pallets in quantity. Reliable delivery in and around Hyderabad.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Warehouse storage and supply",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-wood-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-wood-900">
            Our services
          </h2>
          <p className="mt-3 text-wood-700">
            We provide wooden pallets and packaging that meet your business requirements.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl border border-wood-200 overflow-hidden shadow-sm hover:shadow-md hover:border-wood-300 transition"
            >
              <div className="relative aspect-[4/3] bg-wood-100">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-wood-100 flex items-center justify-center text-wood-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-wood-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-wood-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
