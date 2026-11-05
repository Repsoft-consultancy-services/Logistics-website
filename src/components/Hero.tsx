"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PUBLIC_IMAGES } from "@/lib/images";

const slides = [
  {
    image: PUBLIC_IMAGES[0],
    title: "Wooden Pallets",
    subtitle: "Manufacturing and supply in Hyderabad",
  },
  {
    image: PUBLIC_IMAGES[1],
    title: "Wooden Boxes",
    subtitle: "Built for safe cargo protection",
  },
  {
    image: PUBLIC_IMAGES[2],
    title: "Wooden Crates",
    subtitle: "Strong packing for shipping and storage",
  },
  {
    image: PUBLIC_IMAGES[3],
    title: "Export Packing",
    subtitle: "Ready for domestic and export dispatch",
  },
  {
    image: PUBLIC_IMAGES[4],
    title: "Packaging",
    subtitle: "Quality wood, delivered with care",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const go = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[420px] sm:h-[520px] lg:h-[580px] bg-[#e7dfd4] overflow-hidden">
      {slides.map((slide, slideIndex) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.title}
          fill
          priority={slideIndex === 0}
          className={`object-cover transition-opacity duration-700 ${
            slideIndex === index ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-14 flex flex-col justify-center">
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase text-brand-orange tracking-wide text-balance">
          {slides[index].title}
        </h1>
        <p className="mt-3 max-w-xl text-xl sm:text-3xl text-white font-semibold">
          {slides[index].subtitle}
        </p>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute z-20 left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/85 text-brand-navy text-2xl leading-none"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute z-20 right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/85 text-brand-navy text-2xl leading-none"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${slideIndex + 1}`}
            onClick={() => setIndex(slideIndex)}
            className={`h-2.5 w-2.5 rounded-full ${
              slideIndex === index ? "bg-brand-lime" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
