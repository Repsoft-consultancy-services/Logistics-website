import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/products";
import { PUBLIC_IMAGES } from "@/lib/images";

export const metadata = {
  title: "Our Products | Wooden Pallets, Boxes & Crates | Kranthi Packing Industries",
  description: "Wooden pallets, wooden boxes, wooden crates, recycled pallets, and pallet repair. Quality packaging in Hyderabad.",
};

export default function ProductsPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-wood-900">
            Our Products
          </h1>
          <p className="mt-3 text-wood-700">
            Wooden pallets, boxes, crates, recycled pallets, and pallet repair—all from Kranthi Packing Industries, Hyderabad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group bg-white rounded-xl border border-wood-200 overflow-hidden shadow-sm hover:shadow-md hover:border-wood-400 transition"
            >
              <div className="relative aspect-[4/3] bg-wood-100">
                <Image
                  src={PUBLIC_IMAGES[index % PUBLIC_IMAGES.length]}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold text-wood-900 group-hover:text-wood-700">
                  {product.title}
                </h2>
                <p className="mt-2 text-sm text-wood-600 line-clamp-2">
                  {product.shortDesc}
                </p>
                <span className="mt-3 inline-flex items-center text-wood-600 font-medium text-sm group-hover:text-wood-800">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
