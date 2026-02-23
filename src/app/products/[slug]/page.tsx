import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/products";
import { PUBLIC_IMAGES } from "@/lib/images";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Product | Kranthi Packing Industries" };
  return {
    title: `${product.title} | Kranthi Packing Industries`,
    description: product.shortDesc,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const imageIndex = PRODUCTS.indexOf(product) % PUBLIC_IMAGES.length;

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href="/products"
          className="text-wood-600 hover:text-wood-800 text-sm font-medium mb-8 inline-block"
        >
          ← All products
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-wood-200 shadow-lg">
            <Image
              src={PUBLIC_IMAGES[imageIndex]}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-wood-900">
              {product.title}
            </h1>
            <p className="mt-4 text-wood-700 leading-relaxed">
              {product.description}
            </p>
            <ul className="mt-6 space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-wood-700">
                  <span className="w-2 h-2 rounded-full bg-wood-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-wood-600 text-white font-medium hover:bg-wood-700 transition"
            >
              {product.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
