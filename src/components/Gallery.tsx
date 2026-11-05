import Image from "next/image";
import { PUBLIC_IMAGES } from "@/lib/images";

const captions = [
  "Wooden pallets",
  "Wooden boxes",
  "Wooden crates",
  "Export packing",
  "Workshop supply",
];

export default function Gallery() {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-center font-display text-2xl sm:text-3xl uppercase tracking-wide text-brand-ink">
          Our Products & Services
        </h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {PUBLIC_IMAGES.map((src, index) => (
            <figure key={src} className="relative aspect-[4/3] overflow-hidden bg-brand-bar">
              <Image
                src={src}
                alt={captions[index] ?? "Wooden packaging"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-brand-navy/80 px-3 py-2 text-xs sm:text-sm uppercase tracking-wide text-white">
                {captions[index]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
