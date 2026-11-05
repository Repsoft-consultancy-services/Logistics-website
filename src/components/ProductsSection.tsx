import Link from "next/link";
import Image from "next/image";
import { CATALOG } from "@/lib/products";
import { PUBLIC_IMAGES } from "@/lib/images";

export default function ProductsSection() {
  return (
    <section id="products" className="py-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3 text-brand-ink">
          <span className="font-display text-4xl text-[#c8c8c8]" aria-hidden>
            \\
          </span>
          <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-wide">Products</h2>
          <span className="font-display text-4xl text-[#c8c8c8]" aria-hidden>
            \\
          </span>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {CATALOG.map((group) => (
            <div key={group.title}>
              <Link href={group.href} className="relative block aspect-[16/7] overflow-hidden bg-brand-navy">
                <Image
                  src={PUBLIC_IMAGES[group.imageIndex]}
                  alt={group.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute inset-0 bg-brand-navy/55" />
                <span className="absolute inset-0 flex items-center justify-center px-3 text-center font-display text-sm sm:text-base font-semibold uppercase tracking-wide text-white">
                  {group.title}
                </span>
              </Link>
              <ol className="mt-4 space-y-1.5 text-sm text-brand-ink">
                {group.items.map((item, index) => (
                  <li key={item}>
                    <Link href={group.href} className="hover:text-brand-blue">
                      {index + 1}. {item}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
