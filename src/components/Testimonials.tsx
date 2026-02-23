export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-wood-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-wood-900">
            What our clients say
          </h2>
          <p className="mt-3 text-wood-700">
            Trusted by businesses across Hyderabad and beyond for wooden packaging.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl border border-wood-200 p-6 shadow-sm">
            <p className="text-wood-700 italic">
              &ldquo;Quality wooden pallets and on-time delivery. We rely on Kranthi Packing for our regular supply.&rdquo;
            </p>
            <p className="mt-4 text-sm font-medium text-wood-900">— Satisfied client</p>
          </div>
          <div className="bg-white rounded-xl border border-wood-200 p-6 shadow-sm">
            <p className="text-wood-700 italic">
              &ldquo;Good service and fair pricing for wooden boxes and crates. Recommended for export packaging.&rdquo;
            </p>
            <p className="mt-4 text-sm font-medium text-wood-900">— Satisfied client</p>
          </div>
        </div>
      </div>
    </section>
  );
}
