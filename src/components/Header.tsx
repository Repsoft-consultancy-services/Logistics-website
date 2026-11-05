"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Our Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="bg-brand-bar text-brand-ink text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-3">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center gap-2 whitespace-nowrap hover:text-brand-navy"
          >
            <PhoneIcon />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 min-w-0 hover:text-brand-navy"
          >
            <MailIcon />
            <span className="truncate">{SITE.email}</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4 sm:gap-6">
        <Link href="/" className="shrink-0 leading-none">
          <span className="block font-display text-4xl font-bold text-brand-navy tracking-tight">
            {SITE.mark}
          </span>
          <span className="block text-[11px] text-brand-navy -mt-0.5">Kranthi Packing</span>
          <span className="block text-[11px] italic text-[#222] mt-0.5 max-w-[9.5rem]">
            {SITE.tagline}
          </span>
        </Link>
        <div className="hidden sm:block h-14 w-px bg-gray-200" />
        <div className="min-w-0">
          <p className="font-display text-xl sm:text-2xl lg:text-[32px] leading-tight font-semibold text-brand-navy uppercase border-b-[3px] border-brand-lime pb-1">
            {SITE.name}
          </p>
          <p className="mt-1 text-xs sm:text-sm font-semibold tracking-wide text-[#222] uppercase">
            {SITE.line}
          </p>
        </div>
      </div>

      <div className="bg-brand-navy">
        <div className="max-w-6xl mx-auto px-2 flex items-center justify-between md:justify-center">
          <nav className="hidden md:flex items-stretch">
            {navLinks.map((link) => {
              const active = isActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-6 py-4 text-[13px] uppercase tracking-wider text-white ${
                    active ? "bg-brand-lime" : "hover:bg-white/10"
                  }`}
                  style={
                    active
                      ? { clipPath: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)" }
                      : undefined
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            className="md:hidden ml-auto px-4 py-3 text-white uppercase tracking-wider text-sm"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/15 px-4 py-2 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-white uppercase tracking-wider text-sm border-b border-white/10"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3A2 2 0 0 1 18.5 19 15 15 0 0 1 5 5.5a2 2 0 0 1 1.5-2z" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}
