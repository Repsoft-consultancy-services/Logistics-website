import Link from "next/link";
import Image from "next/image";
import { PUBLIC_IMAGES } from "@/lib/images";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={PUBLIC_IMAGES[0]}
          alt="Wooden packaging - Kranthi Packing Industries"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-wood-900/90 via-wood-900/75 to-wood-950/95" />
      </div>
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-wood-50 tracking-tight">
          Kranthi Packing Industries
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-wood-200 max-w-2xl mx-auto">
          Quality wooden pallets and packaging solutions in Hyderabad. Built for strength, delivered with care.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-wood-500 text-white font-medium hover:bg-wood-600 transition shadow-lg"
          >
            Get in touch
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-wood-400 text-wood-100 font-medium hover:bg-wood-800/50 transition"
          >
            Our products
          </Link>
        </div>
      </div>
    </section>
  );
}
