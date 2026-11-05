import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/products";
import { PUBLIC_IMAGES } from "@/lib/images";
import PageBanner from "@/components/PageBanner";

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
    <div>
      <PageBanner title={product.title} subtitle={product.shortDesc} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <Link href="/products" className="text-sm font-semibold uppercase tracking-wide text-brand-blue hover:text-brand-navy">
          All products
        </Link>
        <div className="mt-6 grid md:grid-cols-2 gap-10 items-start">
          <div className="relative aspect-[4/3] overflow-hidden border border-[#e6e6e6]">
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
            <p className="text-brand-muted leading-relaxed">{product.description}</p>
            <ul className="mt-6 space-y-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-brand-ink">
                  <span className="h-2 w-2 bg-brand-lime shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center bg-brand-lime px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#8E4E22]"
            >
              {product.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
