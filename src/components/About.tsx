import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-wood-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-wood-900">
              About us
            </h2>
            <p className="mt-4 text-wood-700 leading-relaxed">
              Kranthi Packing Industries is your trusted partner for wooden pallets and packaging in Hyderabad. Based in Bowrampet, we manufacture and supply sturdy, reliable pallets tailored to your logistics and storage needs.
            </p>
            <p className="mt-4 text-wood-700 leading-relaxed">
              We focus on quality materials and consistent workmanship so your goods move safely. Whether you need standard pallets or custom packaging solutions, we deliver on time.
            </p>
            <ul className="mt-6 space-y-2 text-wood-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-wood-500" />
                Located in Hyderabad, Telangana
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-wood-500" />
                Quality wood and durable construction
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-wood-500" />
                Reliable supply for businesses
              </li>
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-wood-300/50 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=80"
              alt="Stack of wooden pallets"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
