import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-footer text-white/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="font-display text-lg uppercase tracking-wide text-white">
            Head Office
          </h2>
          <p className="mt-3 font-semibold text-white">{SITE.name}</p>
          <address className="mt-2 not-italic text-sm leading-relaxed">
            {SITE.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>

        <div>
          <h2 className="font-display text-lg uppercase tracking-wide text-white">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-brand-orange">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-brand-orange break-all">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg uppercase tracking-wide text-white">
            Service Area
          </h2>
          <ul className="mt-3 space-y-1 text-sm">
            {SITE.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <div className="mt-5 flex gap-4 text-sm">
            <Link href="/" className="hover:text-brand-orange">
              Home
            </Link>
            <Link href="/products" className="hover:text-brand-orange">
              Products
            </Link>
            <Link href="/contact" className="hover:text-brand-orange">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-sm text-white/60">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
