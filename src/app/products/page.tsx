import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/products";
import { PUBLIC_IMAGES } from "@/lib/images";
import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "Our Products | Wooden Pallets, Boxes & Crates | Kranthi Packing Industries",
  description: "Wooden pallets, wooden boxes, and wooden crates. Quality packaging in Hyderabad.",
};

export default function ProductsPage() {
  return (
    <div>
      <PageBanner
        title="Products"
        subtitle="Wooden pallets, boxes, and crates from Kranthi Packing Industries, Hyderabad."
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group border border-[#e6e6e6] bg-white hover:border-brand-navy"
            >
              <div className="relative aspect-[4/3] bg-brand-bar">
                <Image
                  src={PUBLIC_IMAGES[index % PUBLIC_IMAGES.length]}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h2 className="font-display text-xl uppercase text-brand-blue group-hover:text-brand-navy">
                  {product.title}
                </h2>
                <p className="mt-2 text-sm text-brand-muted line-clamp-3">{product.shortDesc}</p>
                <span className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-brand-navy">
                  Read more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
