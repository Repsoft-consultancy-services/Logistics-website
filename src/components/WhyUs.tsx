const points = [
  "Timely delivery – on time, every time",
  "Heat treatment & fumigation services available",
  "Well trained staff",
  "Assure best quality",
  "Customer satisfaction",
  "End-to-end solution provider in wooden packaging",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-wood-900 text-wood-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-wood-400 text-sm font-semibold uppercase tracking-wider">
            Why us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-2">
            Why choose Kranthi Packing Industries
          </h2>
          <p className="mt-3 text-wood-300 max-w-2xl mx-auto">
            We deliver reliable wooden packaging with a focus on quality, compliance, and on-time delivery.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 p-4 rounded-xl bg-wood-800/50 border border-wood-700"
            >
              <span className="w-2 h-2 rounded-full bg-wood-400 shrink-0 mt-1.5" />
              <span className="text-wood-200">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
