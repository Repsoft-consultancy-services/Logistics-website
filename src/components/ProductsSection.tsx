import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/products";
import { PUBLIC_IMAGES } from "@/lib/images";

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-wood-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-wood-900">
            Our products
          </h2>
          <p className="mt-3 text-wood-700">
            The same products we offer: wooden pallets, boxes, and crates.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.slug}
              className="bg-white rounded-xl border border-wood-200 overflow-hidden shadow-sm hover:shadow-md hover:border-wood-300 transition"
            >
              <div className="relative aspect-[4/3] bg-wood-200">
                <Image
                  src={PUBLIC_IMAGES[index % PUBLIC_IMAGES.length]}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-wood-900">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-wood-600 line-clamp-2">
                  {product.shortDesc}
                </p>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-4 inline-flex items-center text-wood-600 font-medium text-sm hover:text-wood-800"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-wood-600 text-white font-medium hover:bg-wood-700 transition"
          >
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
}
